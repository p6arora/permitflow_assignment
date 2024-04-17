'use client';
import { useState } from "react";
import Header from "../components/Header";
import Interior from "../components/Interior";
import Exterior from "../components/Exterior";
import { InteriorCheckBoxes, ExteriorCheckBoxes } from '@/types'
import { useRouter } from 'next/navigation'
// import { z } from 'zod'
import { trpc } from '@/app/_trpc/client'

export default function Home() {
  // hook to allow communication with tRPC
  const createNewPermit = trpc.createNewPermitProcess.useMutation()

  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState<string>('');

  // State to keep track of next steps relative to result
  const nextSteps = new Map();
  nextSteps.set('inHouseReviewProcess', ['Obtain a building permit', 'Include plan sets', 'Submit application for in-house review'])
  nextSteps.set('otcSubmissionProcess', ['Obtain a building permit', 'Submit application for OTC review'])
  nextSteps.set('noPermit', [])

  // Initalize the router
  const router = useRouter()

  // State to keep track of the checked state of each external checkbox
  const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
    garageDoorReplacement: false,
    exteriorDoors: false,
    fencing: false,
    other: false
  });

  // State to keep track of the checked state of each internal checkbox
  const [interiorCheckboxes, setInteriorCheckboxes] = useState<InteriorCheckBoxes>({
    bathroomRemodel: false,
    newBathroom: false,
    newLaundryRoom: false,
    other: false
  });

  // Validate an option was selected
  const validateOptionSelected = () => {

    // One of the exterior checkboxes was selected
    if (exteriorCheckboxes.garageDoorReplacement ||
      exteriorCheckboxes.exteriorDoors ||
      exteriorCheckboxes.fencing ||
      exteriorCheckboxes.other
    ) {
      return true
    }

    // One of the internal checkboxes was selected
    else if (interiorCheckboxes.bathroomRemodel ||
      interiorCheckboxes.newBathroom ||
      interiorCheckboxes.newLaundryRoom ||
      interiorCheckboxes.other
    ) {
      return true
    }

    // nothing was selected
    else {
      return false
    }
  }

  // Reset checkboxes
  const resetCheckboxes = () => {

    // Reset external checkboxes
    exteriorCheckboxes.exteriorDoors = false
    exteriorCheckboxes.fencing = false
    exteriorCheckboxes.garageDoorReplacement = false
    exteriorCheckboxes.other = false

    // Reset internal checkboxes
    interiorCheckboxes.bathroomRemodel = false
    interiorCheckboxes.newBathroom = false
    interiorCheckboxes.newLaundryRoom = false
    interiorCheckboxes.other = false
  }

  // Handler function to update the selected option
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    resetCheckboxes()
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let resultString = ""
    let resultEnum = {
      inHouseReviewProcess: false,
      otcSubmissionProcess: false,
      noPermit: false
    }
    let finalResult = ""

    // exterior logic
    if (selectedOption === "exterior") {
      if (exteriorCheckboxes.other) {
        resultString = "Other was selected - In-House Review Process is required"
        resultEnum.inHouseReviewProcess = true
        finalResult = "inHouseReviewProcess"
      }
      else if (exteriorCheckboxes.garageDoorReplacement || exteriorCheckboxes.exteriorDoors) {
        resultString = "Garage Door Replacement and/or Exterior Doors was submitted - Over-The-Counter Submission Process is required"
        resultEnum.otcSubmissionProcess = true
        finalResult = "otcSubmissionProcess"
      }
      else {
        resultString = "No Permit was submitted"
        resultEnum.noPermit = true
        finalResult = "noPermit"
      }
    }
    // interior logic
    else {
      if (interiorCheckboxes.bathroomRemodel) {
        resultString = "Bathroom Remodel was selected - Over-The-Counter Submission Process is required"
        resultEnum.otcSubmissionProcess = true
        finalResult = "otcSubmissionProcess"
      }
      else {
        resultString = "Bathroom Remodel was not selected - so In-House Review Process is needed"
        resultEnum.inHouseReviewProcess = true
        finalResult = "inHouseReviewProcess"
      }

    }

    const res = await createNewPermit.mutateAsync({
      process: finalResult,
      nextSteps: nextSteps.get(finalResult)
    });
    console.log(res)

    router.push('/results?nextSteps=' + finalResult)
  }

  return (
    <main>
      <Header />
      <div className="flex justify-center w-full">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <h2 className="p-4 text-3xl font-bold">What Residential Work Are You Doing?</h2>
          <select className="select select-bordered select-lg max-w-xs mx-auto self-center ml-24" value={selectedOption} onChange={handleSelectChange}>
            <option selected>Select Renovation</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
          </select>
          {selectedOption === "interior" && <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />}
          {selectedOption === "exterior" && <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />}
          <div className="flex justify-center">
            {selectedOption && validateOptionSelected() && <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500 text-white m-4" type="submit">Submit</button>}
          </div>
        </form>
      </div >
    </main >
  )
}

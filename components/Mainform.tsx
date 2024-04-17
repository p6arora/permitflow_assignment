// 'use client';
// import { useState } from "react";
// import Header from "./Header";
// import Interior from "./Interior";
// import Exterior from "./Exterior";
// import { InteriorCheckBoxes, ExteriorCheckBoxes } from '@/types'
// import { useRouter } from 'next/router'


// const Mainform = () => {
//     // State to keep track of the selected option
//     const [selectedOption, setSelectedOption] = useState('');

//     // Initalize the router
//     const router = useRouter()

//     // State to keep track of the checked state of each external checkbox
//     const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
//         garageDoorReplacement: false,
//         exteriorDoors: false,
//         fencing: false,
//         other: false
//     });

//     // State to keep track of the checked state of each internal checkbox
//     const [interiorCheckboxes, setInteriorCheckboxes] = useState<InteriorCheckBoxes>({
//         bathroomRemodel: false,
//         newBathroom: false,
//         newLaundryRoom: false,
//         other: false
//     });

//     // Validate an option was selected
//     const validateOptionSelected = () => {

//         // One of the exterior checkboxes was selected
//         if (exteriorCheckboxes.garageDoorReplacement ||
//             exteriorCheckboxes.exteriorDoors ||
//             exteriorCheckboxes.fencing ||
//             exteriorCheckboxes.other
//         ) {
//             return true
//         }

//         // One of the internal checkboxes was selected
//         else if (interiorCheckboxes.bathroomRemodel ||
//             interiorCheckboxes.newBathroom ||
//             interiorCheckboxes.newLaundryRoom ||
//             interiorCheckboxes.other
//         ) {
//             return true
//         }

//         // nothing was selected
//         else {
//             return false
//         }
//     }

//     // Reset checkboxes
//     const resetCheckboxes = () => {

//         // Reset external checkboxes
//         exteriorCheckboxes.exteriorDoors = false
//         exteriorCheckboxes.fencing = false
//         exteriorCheckboxes.garageDoorReplacement = false
//         exteriorCheckboxes.other = false

//         // Reset internal checkboxes
//         interiorCheckboxes.bathroomRemodel = false
//         interiorCheckboxes.newBathroom = false
//         interiorCheckboxes.newLaundryRoom = false
//         interiorCheckboxes.other = false
//     }

//     // Handler function to update the selected option
//     const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedOption(event.target.value);
//         resetCheckboxes()
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         let resultString = ""
//         let resultEnum = {
//             inHouseReviewProcess: false,
//             otcSubmissionProcess: false,
//             noPermit: false
//         }

//         // exterior logic
//         if (selectedOption === "exterior") {
//             if (exteriorCheckboxes.other) {
//                 resultString = "Other was selected - In-House Review Process is required"
//                 resultEnum.inHouseReviewProcess = true
//             }
//             else if (exteriorCheckboxes.garageDoorReplacement || exteriorCheckboxes.exteriorDoors) {
//                 resultString = "Garage Door Replacement and/or Exterior Doors was submitted - Over-The-Counter Submission Process is required"
//                 resultEnum.otcSubmissionProcess = true
//             }
//             else {
//                 resultString = "No Permit was submitted"
//                 resultEnum.noPermit = true
//             }
//         }
//         // interior logic
//         else {
//             if (interiorCheckboxes.bathroomRemodel) {
//                 resultString = "Bathroom Remodel was selected - Over-The-Counter Submission Process is required"
//                 resultEnum.otcSubmissionProcess = true
//             }
//             else {
//                 resultString = "Bathroom Remodel was not selected - so In-House Review Process is needed"
//                 resultEnum.inHouseReviewProcess = true
//             }

//         }

//         router.push({
//             pathname: '/results',
//             query: {
//                 results: resultString,
//                 enumResult: JSON.stringify(resultEnum)
//             }
//         });
//         // navigate('/results', { state: { results: resultString, enumResult: resultEnum } });
//     }


//     return (
//         <div>
//             <Header />
//             <form onSubmit={handleSubmit}>
//                 <h2>What Residential Work Are You Doing?</h2>
//                 {/* Dropdown select element */}
//                 <select className="select-dropdown" value={selectedOption} onChange={handleSelectChange}>
//                     <option value="">Select...</option>
//                     <option value="interior">Interior</option>
//                     <option value="exterior">Exterior</option>
//                 </select>
//                 {selectedOption === "interior" && <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />}
//                 {selectedOption === "exterior" && <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />}
//                 {selectedOption && validateOptionSelected() && <button className="submit-button" type="submit">Submit</button>}
//             </form>
//         </div>
//     )
// }

// export default Mainform
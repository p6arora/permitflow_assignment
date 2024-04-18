import { render, screen } from "@testing-library/react"
const { expect, describe, it } = require("@jest/globals")
import { Interior } from "@/components"
import { useState } from "react"
import { InteriorCheckBoxes } from "@/types"

describe("Interior component", () => {
  it("Contains Title What Interior Work Are You Doing?", () => {
    const InteriorWrapper = () => {
      // State to keep track of the checked state of each internal checkbox
      const [interiorCheckboxes, setInteriorCheckboxes] = useState<InteriorCheckBoxes>({
        bathroomRemodel: false,
        newBathroom: false,
        newLaundryRoom: false,
        other: false,
      })

      return <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />
    }

    render(<InteriorWrapper />)
    const myElem = screen.getByText("What Interior Work Are You Doing?")
    expect(myElem).toBeInTheDocument()
  })

  it("Contains checkbox Bathroom Remodel", () => {
    const InteriorWrapper = () => {
      // State to keep track of the checked state of each internal checkbox
      const [interiorCheckboxes, setInteriorCheckboxes] = useState<InteriorCheckBoxes>({
        bathroomRemodel: false,
        newBathroom: false,
        newLaundryRoom: false,
        other: false,
      })

      return <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />
    }

    render(<InteriorWrapper />)
    const myElem = screen.getByText("Bathroom Remodel")
    expect(myElem).toBeInTheDocument()
  })

  it("Contains checkbox New Bathroom", () => {
    const InteriorWrapper = () => {
      // State to keep track of the checked state of each internal checkbox
      const [interiorCheckboxes, setInteriorCheckboxes] = useState<InteriorCheckBoxes>({
        bathroomRemodel: false,
        newBathroom: false,
        newLaundryRoom: false,
        other: false,
      })

      return <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />
    }

    render(<InteriorWrapper />)
    const myElem = screen.getByText("New Bathroom")
    expect(myElem).toBeInTheDocument()
  })

  it("Contains checkbox New Laundry Room", () => {
    const InteriorWrapper = () => {
      // State to keep track of the checked state of each internal checkbox
      const [interiorCheckboxes, setInteriorCheckboxes] = useState<InteriorCheckBoxes>({
        bathroomRemodel: false,
        newBathroom: false,
        newLaundryRoom: false,
        other: false,
      })

      return <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />
    }

    render(<InteriorWrapper />)
    const myElem = screen.getByText("New Laundry Room")
    expect(myElem).toBeInTheDocument()
  })

  it("Contains checkbox Other", () => {
    const InteriorWrapper = () => {
      // State to keep track of the checked state of each internal checkbox
      const [interiorCheckboxes, setInteriorCheckboxes] = useState<InteriorCheckBoxes>({
        bathroomRemodel: false,
        newBathroom: false,
        newLaundryRoom: false,
        other: false,
      })

      return <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />
    }

    render(<InteriorWrapper />)
    const myElem = screen.getByText("Other")
    expect(myElem).toBeInTheDocument()
  })
})

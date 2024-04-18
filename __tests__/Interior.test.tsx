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

      function handleInteriorCheckboxes(name: string, checked: boolean): void {
        setInteriorCheckboxes({
          ...interiorCheckboxes,
          [name]: checked,
        })
      }

      return <Interior onCheckBoxChange={handleInteriorCheckboxes} />
    }

    render(<InteriorWrapper />)
    expect(screen.getByText("What Interior Work Are You Doing?")).toBeInTheDocument()
    expect(screen.getByText("Bathroom Remodel")).toBeInTheDocument()
    expect(screen.getByText("New Bathroom")).toBeInTheDocument()
    expect(screen.getByText("New Laundry Room")).toBeInTheDocument()
    expect(screen.getByText("Other")).toBeInTheDocument()
  })
})

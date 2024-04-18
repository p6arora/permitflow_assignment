import { render, screen } from "@testing-library/react"
const { expect, describe, it } = require("@jest/globals")
import { Exterior } from "@/components"
import { useState } from "react"
import { ExteriorCheckBoxes } from "@/types"

describe("Exterior component", () => {
  it("Contains Title What Exterior Work Are You Doing?", () => {
    const ExteriorWrapper = () => {
      const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
        garageDoorReplacement: false,
        exteriorDoors: false,
        fencing: false,
        other: false,
      })

      function handleExteriorCheckboxes(name: string, checked: boolean): void {
        setExteriorCheckboxes({
          ...exteriorCheckboxes,
          [name]: checked,
        })
      }

      return <Exterior onCheckBoxChange={handleExteriorCheckboxes} />
    }

    render(<ExteriorWrapper />)
    expect(screen.getByText("What Exterior Work Are You Doing?")).toBeInTheDocument()
    expect(screen.getByText("Garage Door Replacement")).toBeInTheDocument()
    expect(screen.getByText("Exterior Doors")).toBeInTheDocument()
    expect(screen.getByText("Fencing")).toBeInTheDocument()
    expect(screen.getByText("Other")).toBeInTheDocument()
  })

})

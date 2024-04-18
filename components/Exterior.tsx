"use client"
import React from "react"
import { ExteriorCheckBoxProps } from "@/types"

const Exterior = ({ onCheckBoxChange }: ExteriorCheckBoxProps) => {
  // Handler function to toggle the checked state of a checkbox
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = event.target
    onCheckBoxChange(name, checked)
  }

  return (
    <div>
      <h3 className="p-5 text-center text-2xl font-bold">What Exterior Work Are You Doing?</h3>
      <div className="grid grid-cols-2">
        {/* Checkbox input elements */}
        <label>
          <input
            type="checkbox"
            name="garageDoorReplacement"
            className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
            // checked={checkboxes.garageDoorReplacement}
            onChange={handleCheckboxChange}
          />
          Garage Door Replacement
        </label>
        <label>
          <input
            type="checkbox"
            name="exteriorDoors"
            className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
            // checked={checkboxes.exteriorDoors}
            onChange={handleCheckboxChange}
          />
          Exterior Doors
        </label>
        <label>
          <input
            type="checkbox"
            name="fencing"
            className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
            // checked={checkboxes.fencing}
            onChange={handleCheckboxChange}
          />
          Fencing
        </label>
        <label>
          <input
            type="checkbox"
            name="other"
            className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
            // checked={checkboxes.other}
            onChange={handleCheckboxChange}
          />
          Other
        </label>
      </div>
    </div>
  )
}

export default Exterior

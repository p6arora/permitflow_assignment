'use client';
import React from 'react'
import { InteriorCheckBoxProps } from '@/types'

const Interior = ({ checkboxes, setCheckBoxes }: InteriorCheckBoxProps) => {
    // Handler function to toggle the checked state of a checkbox
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, checked } = event.target;
        setCheckBoxes({
            ...checkboxes,
            [name]: checked
        });
    };

    return (
        <div>
            <h3 className='p-5 text-center text-2xl font-bold'>What Interior Work Are You Doing?</h3>
            <div className="grid grid-cols-2">
                {/* Checkbox input elements */}
                <label>
                    <input
                        type="checkbox"
                        name="bathroomRemodel"
                        className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
                        checked={checkboxes.bathroomRemodel}
                        onChange={handleCheckboxChange}
                    />
                    Bathroom Remodel
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="newBathroom"
                        className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
                        checked={checkboxes.newBathroom}
                        onChange={handleCheckboxChange}
                    />
                    New Bathroom
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="newLaundryRoom"
                        className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
                        checked={checkboxes.newLaundryRoom}
                        onChange={handleCheckboxChange}
                    />
                    New Laundry Room
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="other"
                        className="checkbox checkbox-md mx-2 border-blue-500 checked:border-blue-500 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
                        checked={checkboxes.other}
                        onChange={handleCheckboxChange}
                    />
                    Other
                </label>
            </div>
        </div>
    )
}

export default Interior
import { render, screen } from '@testing-library/react';
const { expect, describe, it } = require('@jest/globals');
import { Exterior } from '@/components';
import { useState } from 'react';
import { ExteriorCheckBoxes } from '@/types';

describe('Exterior component', () => {
    it('Contains Title What Exterior Work Are You Doing?', () => {
        const ExteriorWrapper = () => {
            const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
                garageDoorReplacement: false,
                exteriorDoors: false,
                fencing: false,
                other: false
            });

            return <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />;
        };

        render(<ExteriorWrapper />);
        const myElem = screen.getByText('What Exterior Work Are You Doing?');
        expect(myElem).toBeInTheDocument();
    });

    it('Contains checkbox Garage Door Replacement', () => {
        const ExteriorWrapper = () => {
            const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
                garageDoorReplacement: false,
                exteriorDoors: false,
                fencing: false,
                other: false
            });

            return <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />;
        };

        render(<ExteriorWrapper />);
        const myElem = screen.getByText('Garage Door Replacement');
        expect(myElem).toBeInTheDocument();
    });

    it('Contains checkbox Exterior Doors', () => {
        const ExteriorWrapper = () => {
            const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
                garageDoorReplacement: false,
                exteriorDoors: false,
                fencing: false,
                other: false
            });

            return <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />;
        };

        render(<ExteriorWrapper />);
        const myElem = screen.getByText('Exterior Doors')
        expect(myElem).toBeInTheDocument();
    });

    it('Contains checkbox Fencing', () => {
        const ExteriorWrapper = () => {
            const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
                garageDoorReplacement: false,
                exteriorDoors: false,
                fencing: false,
                other: false
            });

            return <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />;
        };

        render(<ExteriorWrapper />);
        const myElem = screen.getByText('Fencing');
        expect(myElem).toBeInTheDocument();
    });

    it('Contains checkbox Other', () => {
        const ExteriorWrapper = () => {
            const [exteriorCheckboxes, setExteriorCheckboxes] = useState<ExteriorCheckBoxes>({
                garageDoorReplacement: false,
                exteriorDoors: false,
                fencing: false,
                other: false
            });

            return <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />;
        };

        render(<ExteriorWrapper />);
        const myElem = screen.getByText('Other');
        expect(myElem).toBeInTheDocument();
    });


});
export interface InteriorCheckBoxes {
    bathroomRemodel: boolean;
    newBathroom: boolean;
    newLaundryRoom: boolean;
    other: boolean;
};

export interface ExteriorCheckBoxes {
    garageDoorReplacement: boolean;
    exteriorDoors: boolean;
    fencing: boolean;
    other: boolean;
};

export interface InteriorCheckBoxProps {
    checkboxes: InteriorCheckBoxes;
    setCheckBoxes: React.Dispatch<React.SetStateAction<InteriorCheckBoxes>>;
};

export interface ExteriorCheckBoxProps {
    checkboxes: ExteriorCheckBoxes;
    setCheckBoxes: React.Dispatch<React.SetStateAction<ExteriorCheckBoxes>>;
};
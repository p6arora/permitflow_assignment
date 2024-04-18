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
    onCheckBoxChange: (name: string, checked: boolean) => void;
}

export interface ExteriorCheckBoxProps {
    onCheckBoxChange: (name: string, checked: boolean) => void;
}
  

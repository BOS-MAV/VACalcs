export class Question{
    id: string;
    text: string;
    description: string;
    type: string;
    min: number;
    max: number;
    hasUnits: boolean;
    unitType: string;
    selectedUnit: string;
    unitChoices: string[];
    value: any;
    options: object[];

    constructor(obj: any) {
        this.text = obj.text;
        this.description = obj.description;
        this.type = obj.type;
        this.min = obj.min;
        this.max = obj.max;
        this.id = obj.id;
        this.value = obj.value;
        this.hasUnits = obj.hasUnits;
        this.unitType = obj.unitType;
        this.selectedUnit = obj.selectedUnit;
        this.unitChoices = obj.unitChoices;
        this.options = obj.options;
    }

    validate(): boolean {
        return true;
    }
}

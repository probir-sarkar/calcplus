interface LengthUnit {
    label: string;
    value: string;
    factor: number;
}
declare const lengthUnits: LengthUnit[];
declare const convertLength: (value: number, from: string, to: string) => number;
export { lengthUnits, convertLength };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertLength = exports.lengthUnits = void 0;
var lengthUnits = [
    { label: "Millimeter (mm)", value: "mm", factor: 0.001 },
    { label: "Centimeter (cm)", value: "cm", factor: 0.01 },
    { label: "Meter (m)", value: "m", factor: 1 },
    { label: "Kilometer (km)", value: "km", factor: 1000 },
    { label: "Inch (in)", value: "in", factor: 0.0254 },
    { label: "Foot (ft)", value: "ft", factor: 0.3048 },
    { label: "Yard (yd)", value: "yd", factor: 0.9144 },
    { label: "Mile (mi)", value: "mi", factor: 1609.344 },
    { label: "Nautical mile (nmi)", value: "nmi", factor: 1852 },
    { label: "Light-year (ly)", value: "ly", factor: 9460730472580800 },
    { label: "Astronomical unit (AU)", value: "AU", factor: 149597870700 },
    { label: "Parsec (pc)", value: "pc", factor: 30856775814671900 },
    { label: "Fathom", value: "fathom", factor: 1.8288 },
    { label: "Furlong", value: "furlong", factor: 201.168 },
    { label: "Hand", value: "hand", factor: 0.1016 },
    { label: "League", value: "league", factor: 4828.032 },
    { label: "Rod", value: "rod", factor: 5.0292 },
    { label: "Cable length", value: "cable", factor: 185.2 },
    { label: "Angstrom", value: "angstrom", factor: 1e-10 },
    { label: "Micron", value: "micron", factor: 1e-6 },
];
exports.lengthUnits = lengthUnits;
var convertLength = function (value, from, to) {
    var fromUnit = lengthUnits.find(function (unit) { return unit.value === from; });
    var toUnit = lengthUnits.find(function (unit) { return unit.value === to; });
    if (!fromUnit || !toUnit) {
        throw new Error("Invalid length unit.");
    }
    return (value * fromUnit.factor) / toUnit.factor;
};
exports.convertLength = convertLength;

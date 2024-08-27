import { ServiceUnitsSymbols } from "../enums/service-units";

export class Unit {
    public name: string;
    public shortName: string;
    public symbol: ServiceUnitsSymbols;
    public image: string;

    constructor(name: string, shortName: string, symbol: ServiceUnitsSymbols, image: string) {
        this.name = name;
        this.shortName = shortName;
        this.symbol = symbol;
        this.image = image;
    }
}
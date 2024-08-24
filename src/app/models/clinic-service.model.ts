export class ClinicService {
    public title: string;
    public price?: Price;
    public priceRange?: PriceRange;

    constructor({ title, price, priceRange, addition }: ClinicServiceConstructorPayload) {
        this.title = title;
        this.price = new Price(price!, addition);
        this.priceRange = priceRange;

    }
}

class PriceRange {
    private pricesMilestones: number[];

    constructor(pricesMilestones: number[]) {
        this.pricesMilestones = pricesMilestones;
    }

    getRange(): string {
        return `${this.pricesMilestones.map((price, index) => `${index == 0 ? '' : ' - '} ${price}`)} грн`;
    }
}

class Price {
    private price: number;
    private addition?: string;

    constructor(price: number, addition?: string) {
        this.price = price;
        this.addition = addition;
    }

    getPrice(): string {
        const hasAddition = !!this.addition

        return `${this.price} грн${hasAddition ? `+ ${this.addition}` : ''}`;
    }
}


type ClinicServiceConstructorPayload = {
    title: string;
    price?: number;
    priceRange?: PriceRange;
    addition: string;
}
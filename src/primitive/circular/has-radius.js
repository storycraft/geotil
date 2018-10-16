import Circular from "./circular";

export default class HasRadius extends Circular {
    constructor(centerPoint, radius) {
        super(centerPoint);

        this.radius = radius;
    }

    get Radius() {
        return this.radius;
    }
}
import Primitive from "../primitive";

export default class Circular extends Primitive {
    constructor(centerPoint) {
        super();
        this.centerPoint = centerPoint;
    }

    get CenterPoint() {
        return this.centerPoint;
    }
}
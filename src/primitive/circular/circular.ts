import Primitive from "../primitive";
import Point2D from "../../point/point2D";

export default abstract class Circular<T extends Point2D> extends Primitive<T> {

    private centerPoint: T;

    constructor(centerPoint: T) {
        super();

        this.centerPoint = centerPoint;
    }

    get CenterPoint() {
        return this.centerPoint;
    }
}
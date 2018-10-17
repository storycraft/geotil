import HasRadius from "./has-radius";
import Point2D from "../../point/point2D";

export default class Circle extends HasRadius {
    constructor(centerPoint, radius) {
        super(centerPoint, radius);
    }

    get Area(){
        return this.Radius * this.Radius * Math.PI;
    }

    contains(point){
        return Point2D.copy(super.CenterPoint).squareDistanceToPoint(point) <= this.Radius * this.Radius;
    }
}
import HasRadius from "../../../primitive/circular/has-radius";
import Point2D from "../../../point/point2D";

export default class Circle extends HasRadius {
    constructor(centerPoint, radius) {
        super(centerPoint, radius);
    }

    get Area(){
        return super.Radius * super.Radius * Math.PI;
    }

    contains(point){
        return Point2D.copy(super.CenterPoint).squareDistanceToPoint(point) <= super.Radius * super.Radius;
    }
}
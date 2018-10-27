import HasRadius from "../../../primitive/circular/has-radius";
import Point2D from "../../../point/point2D";
import Rectangle from "../rectangle";

export default class Circle extends HasRadius {
    constructor(centerPoint, radius) {
        super(centerPoint, radius);
    }

    get Area(){
        return super.Radius * super.Radius * Math.PI;
    }

    get BoundingBox() {
        var centerPoint = Point2D.copy(super.CenterPoint);
        return new Rectangle(centerPoint.subtract(super.Radius, super.Radius), centerPoint.add(super.Radius, super.Radius));
    }

    contains(point){
        return Point2D.copy(super.CenterPoint).squareDistanceToPoint(point) <= super.Radius * super.Radius;
    }
}
import HasRadius from "../../../primitive/circular/has-radius";
import Point2D from "../../../point/point2D";
import Rectangle from "../rectangle";
import Circular from "../../../primitive/circular/circular";

export default class Circle extends Circular<Point2D> implements HasRadius {

    private radius: number;

    constructor(centerPoint: Point2D, radius: number) {
        super(centerPoint);

        this.radius = radius;
    }

    get Radius() {
        return this.radius;
    }

    get Area(){
        return this.Radius * this.Radius * Math.PI;
    }

    get BoundingBox() {
        var centerPoint = super.CenterPoint;
        return new Rectangle(centerPoint.clone().subtract(this.Radius), centerPoint.clone().add(this.Radius));
    }

    contains(point: Point2D){
        return super.CenterPoint.squareDistanceToPoint(point) <= this.Radius * this.Radius;
    }
}
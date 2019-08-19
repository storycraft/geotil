import HasRadius from "../../../primitive/circular/has-radius";
import Point2D from "../../../point/point2D";
import Rectangle from "../rectangle";
import Circular from "../../../primitive/circular/circular";
import Point4D from "../../../point/point4D";

export default class Circle<T extends Point2D> extends Circular<T> implements HasRadius {

    private radius: number;

    constructor(centerPoint: T, radius: number) {
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
        return new Rectangle<T>(<T> <any> Point4D.copy(centerPoint.subtract(this.Radius, this.Radius)), <T> <any> Point4D.copy(centerPoint.add(this.Radius, this.Radius)));
    }

    contains(point: T){
        return super.CenterPoint.squareDistanceToPoint(point) <= this.Radius * this.Radius;
    }
}
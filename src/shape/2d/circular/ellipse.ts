import Circular from "../../../primitive/circular/circular";
import Rectangle from "../rectangle";
import Point2D from "../../../point/point2D";
import Point4D from "../../../point/point4D";

export default class Ellipse<T extends Point2D> extends Circular<T> {

    private widthRadius: number;
    private heightRadius: number;

    constructor(centerPoint: T, widthRadius: number, heightRadius: number) {
        super(centerPoint);

        this.widthRadius = widthRadius;
        this.heightRadius = heightRadius;
    }

    get WidthRadius() {
        return this.widthRadius;
    }

    get HeightRadius() {
        return this.heightRadius;
    }

    get Area() {
        return this.WidthRadius * this.HeightRadius * Math.PI;
    }

    get BoundingBox() {
        return new Rectangle<T>(<T> <any> Point4D.copy(this.CenterPoint.subtract(this.WidthRadius, this.HeightRadius)), <T> <any> Point4D.copy(this.CenterPoint.add(this.WidthRadius, this.HeightRadius)));
    }

    contains(point: T){
        let centerPoint = this.CenterPoint;

        return Math.pow(point.X, 2) / Math.pow(this.WidthRadius, 2) + Math.pow(point.Y - centerPoint.Y, 2) / Math.pow(this.HeightRadius, 2) <= 1;
    }
}
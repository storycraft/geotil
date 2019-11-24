import Circular from "../../../primitive/circular/circular";
import Rectangle from "../rectangle";
import Point2D from "../../../point/point2D";

export default class Ellipse extends Circular<Point2D> {

    private widthRadius: number;
    private heightRadius: number;

    constructor(centerPoint: Point2D, widthRadius: number, heightRadius: number) {
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
        return new Rectangle(this.CenterPoint.clone().subtract(this.WidthRadius, this.HeightRadius), this.CenterPoint.clone().add(this.WidthRadius, this.HeightRadius));
    }

    contains(point: Point2D) {
        let centerPoint = this.CenterPoint;

        return Math.pow(point.X, 2) / Math.pow(this.WidthRadius, 2) + Math.pow(point.Y - centerPoint.Y, 2) / Math.pow(this.HeightRadius, 2) <= 1;
    }
}
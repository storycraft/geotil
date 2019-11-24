import Primitive from "../../primitive/primitive";
import Triangle from "../../primitive/triangle";
import Rectangle from "./rectangle";
import Point2D from "../../point/point2D";

export default class TriangleIsosceles extends Primitive<Point2D> {

    private location: Point2D;
    private size: Point2D;

    constructor(location: Point2D, size: Point2D) {
        super();

        this.location = location;
        this.size = size;
    }

    get Location(){
        return this.location;
    }

    get Size(){
        return this.size;
    }

    get Area(){
        return new Rectangle(this.Location, this.Size).Area / 2;
    }

    get BoundingBox() {
        return new Rectangle(this.Location, this.Size);
    }

    contains(point: Point2D) {
        return this.toTriangle().contains(point);
    }

    toTriangle(){
        let bottomLeft = new Point2D(this.Location.X, this.Location.Y + this.Size.Y);
        let topCenter = new Point2D(bottomLeft.X + this.Size.X / 2, this.Location.Y);
        let bottomRight = new Point2D(bottomLeft.X + this.Size.X, bottomLeft.Y);

        return new Triangle(bottomLeft, topCenter, bottomRight);
    }
}
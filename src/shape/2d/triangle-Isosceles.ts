import Primitive from "../../primitive/primitive";
import Triangle from "../../primitive/triangle";
import Rectangle from "./rectangle";
import Point2D from "../../point/point2D";

export default class TriangleIsosceles<T extends Point2D> extends Primitive<T> {

    private location: T;
    private size: T;

    constructor(location: T, size: T){
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

    contains(point: T){
        return this.toTriangle().contains(point);
    }

    toTriangle(){
        let bottomLeft = new Point2D(this.Location.X, this.Location.Y + this.Size.Y);
        let topCenter = new Point2D(bottomLeft.X + this.Size.X / 2, this.Location.Y);
        let bottomRight = new Point2D(bottomLeft.X + this.Size.X, bottomLeft.Y);

        return new Triangle(bottomLeft, topCenter, bottomRight);
    }
}
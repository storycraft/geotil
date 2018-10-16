import Primitive from "./primitive";
import Triangle from "./triangle";
import Rectangle from "./rectangle";
import Point2D from "../point/point2D";

export default class TriangleIsosceles extends Primitive {
    constructor(location, size){
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

    contains(point){
        return this.toTriangle().contains(point);
    }

    toTriangle(){
        let bottomLeft = new Point2D(this.rectangle.Location.X, this.rectangle.Location.Y + this.rectangle.Size.Y);
        let topCenter = new Point2D(bottomLeft.X + this.rectangle.Size.X / 2, this.rectangle.Location.Y);
        let bottomRight = new Point2D(bottomLeft.X + this.rectangle.Size.X, bottomLeft.Y);

        return new Triangle(bottomLeft, topCenter, bottomRight);
    }
}
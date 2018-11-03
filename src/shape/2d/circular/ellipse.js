import Circular from "../../../primitive/circular/circular";
import Rectangle from "../rectangle";
import Point2D from "../../../point/point2D";

export default class Ellipse extends Circular {
    constructor(location, size) {
        super();

        this.location = location;
        this.size = size;
    }

    get Location() {
        return this.location;
    }

    get Size() {
        return this.size;
    }

    get CenterPoint() {
        return this.Location.addPoint(this.Size.multiply(0.5, 0.5));
    }

    get BoundingBox() {
        return new Rectangle(this.Location, this.Size);
    }

    contains(point){
        let centerPoint = this.CenterPoint;
        let halfDiameter = this.Size.multiply(0.5, 0.5);

        return (Math.pow(point.X - centerPoint.X, 2) / Math.pow(halfDiameter.X, 2)) + (Math.pow(point.Y - centerPoint.Y, 2) / Math.pow(halfDiameter.Y, 2)) < 1;
    }
}
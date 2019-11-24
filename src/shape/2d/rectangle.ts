import Primitive from "../../primitive/primitive";
import Quad from "../../primitive/quad";
import Point2D from "../../point/point2D";
import Point from "../../point/point";

export default class Rectangle extends Primitive<Point2D> {

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
        return Math.abs((this.Size.X || 0) * (this.Size.Y || 0));
    }

    get BoundingBox() {
        return new Rectangle(this.Location, this.Size);
    }

    contains(point: Point2D) {
        let location = this.Location;
        let size = this.Size;
        let targetPoint = point;

        return targetPoint.X >= location.X && targetPoint.Y >= location.Y && targetPoint.X <= location.X + size.X && targetPoint.Y <= location.Y + size.Y;
    }

    toQuad(){
        let point1 = this.Location.clone();
        let point2 = this.Location.clone().add(this.Size.X, 0);
        let point3 = this.Location.clone().addPoint(this.Size);
        let point4 = this.Location.clone().add(0, this.Size.Y);

        return new Quad(point1, point2, point3, point4);
    }
}
import Primitive from "../../primitive/primitive";
import Quad from "../../primitive/quad";
import Point2D from "../../point/point2D";
import Point from "../../point/point";

export default class Rectangle<T extends Point2D> extends Primitive<T> {

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
        return Math.abs((this.Size.X || 0) * (this.Size.Y || 0));
    }

    get BoundingBox() {
        return new Rectangle(this.Location, this.Size);
    }

    contains(point: T){
        let location = this.Location;
        let size = this.Size;
        let targetPoint = <Point2D> <any> point;

        return targetPoint.X >= location.X && targetPoint.Y >= location.Y && targetPoint.X <= location.X + size.X && targetPoint.Y <= location.Y + size.Y;
    }

    toQuad(){
        let point1 = this.Location;
        let point2 = this.Location.add(this.Size.X, 0);
        let point3 = this.Location.addPoint(this.Size);
        let point4 = this.Location.add(0, this.Size.Y);

        return new Quad(point1, point2, point3, point4);
    }
}
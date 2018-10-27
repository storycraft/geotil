import Primitive from "../../primitive/primitive";
import Quad from "../../primitive/quad";
import Point2D from "../../point/point2D";

export default class Rectangle extends Primitive {
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
        return Math.abs((this.Size.X || 0) * (this.Size.Y || 0));
    }

    get BoundingBox() {
        return new Rectangle(this.Location, this.Size);
    }

    contains(point){
        point = Point2D.copy(point);
        let location = Point2D.copy(this.Location);
        let size = Point2D.copy(this.Size);

        return point.X >= location.X && point.Y >= location.Y && point.X <= location.X + size.X && point.Y <= location.Y + size.Y;
    }

    toQuad(){
        let point1 = Point2D.copy(this.Location);
        let point2 = this.Location.add(this.Size.X, 0);
        let point3 = this.Location.add(this.Size);
        let point4 = this.Location.add(0, this.Size.Y);

        return new Quad(point1, point2, point3, point4);
    }
}
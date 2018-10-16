import Primitive from "./primitive";
import Quad from "./quad";
import Point2D from "../point/point2D";

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
        return Math.abs(this.Size.X * this.Size.Y);
    }

    contains(point){
        return point.X >= this.Location.X && point.Y >= this.Location.Y && point.X <= this.Location.X + this.Size.X && point.Y <= this.Location.Y + this.Size.Y;
    }

    toQuad(){
        let point1 = Point2D.copy(this.Location);
        let point2 = this.Location.add(this.Size.X, 0);
        let point3 = this.Location.add(this.Size);
        let point4 = this.Location.add(0, this.Size.Y);

        return new Quad(point1, point2, point3, point4);
    }
}
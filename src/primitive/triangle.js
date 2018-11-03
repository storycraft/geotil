import Primitive from "./primitive";
import Point4D from "../point/point4D";
import Rectangle from "../shape/2d/rectangle";
import Point2D from "../point/point2D";

export default class Triangle extends Primitive {
    constructor(point1, point2, point3){
        super();

        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    get Point1(){
        return this.point1;
    }

    get Point2(){
        return this.point2;
    }

    get Point3(){
        return this.point3;
    }

    get Area(){
        let a = Point4D.copy(this.Point1).distanceToPoint(this.Point2);
        let b = Point4D.copy(this.Point2).distanceToPoint(this.Point3);
        let c = Point4D.copy(this.Point3).distanceToPoint(this.Point1);

        let s = (a + b + c) / 2;

        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    get BoundingBox() {
        let minX = Math.min(Math.min(this.Point1.X, this.Point2.X), this.Point3.X);
        let minY = Math.min(Math.min(this.Point1.Y, this.Point2.Y), this.Point3.Y);

        let maxX = Math.max(Math.max(this.Point1.X, this.Point2.X), this.Point3.X);
        let maxY = Math.max(Math.max(this.Point1.Y, this.Point2.Y), this.Point3.Y);

        return new Rectangle(new Point2D(minX, minY), new Point2D(maxX - minX, maxY - minY));
    }

    contains(point){
        return Math.round(this.Area - (new Triangle(this.Point1, point, this.Point2).Area + new Triangle(this.Point2, point, this.Point3).Area + new Triangle(this.Point3, point, this.Point1).Area)) == 0;
    }
}
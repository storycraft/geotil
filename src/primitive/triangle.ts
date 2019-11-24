import Primitive from "./primitive";
import Rectangle from "../shape/2d/rectangle";
import Point2D from "../point/point2D";
import Point from "../point/point";
import Point4D from "../point/point4D";

export default class Triangle extends Primitive<Point2D> {

    private point1: Point2D;
    private point2: Point2D;
    private point3: Point2D;

    constructor(point1: Point2D, point2: Point2D, point3: Point2D) {
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
        let a = this.Point1.distanceToPoint(this.Point2);
        let b = this.Point2.distanceToPoint(this.Point3);
        let c = this.Point3.distanceToPoint(this.Point1);

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

    contains(point: Point2D) {
        let centerPoint: Point2D = point;

        return Math.round(this.Area - (new Triangle(this.Point1, centerPoint, this.Point2).Area + new Triangle(this.Point2, centerPoint, this.Point3).Area + new Triangle(this.Point3, centerPoint, this.Point1).Area)) == 0;
    }
}
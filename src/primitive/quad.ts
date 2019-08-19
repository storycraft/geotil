import Primitive from "./primitive";
import Triangle from "./triangle";
import Rectangle from "../shape/2d/rectangle";
import Point2D from "../point/point2D";
import Point from "../point/point";
import Point4D from "../point/point4D";

export default class Quad<T extends Point2D> extends Primitive<T> {

    private point1: T;
    private point2: T;
    private point3: T;
    private point4: T;

    constructor(point1: T, point2: T, point3: T, point4: T){
        super();

        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
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

    get Point4(){
        return this.point4;
    }

    get Area(){
        return new Triangle(this.Point1, this.Point2, this.Point3).Area + new Triangle(this.Point3, this.Point4, this.Point1).Area;
    }

    get BoundingBox(): Rectangle<T> {
        let minX = Math.min(Math.min(Math.min(this.Point1.X, this.Point2.X), this.Point3.X), this.Point4.X);
        let minY = Math.min(Math.min(Math.min(this.Point1.Y, this.Point2.Y), this.Point3.Y), this.Point4.Y);

        let maxX = Math.max(Math.max(Math.max(this.Point1.X, this.Point2.X), this.Point3.X), this.Point4.X);
        let maxY = Math.max(Math.max(Math.max(this.Point1.Y, this.Point2.Y), this.Point3.Y), this.Point4.Y);

        return new Rectangle(<T> <any> new Point4D(minX, minY), <T> <any> new Point4D(maxX - minX, maxY - minY));
    }

    contains(point: T){
        return new Triangle(this.Point1, this.Point2, this.Point3).contains(point) || new Triangle(this.Point3, this.Point4, this.Point1).contains(point);
    }
}
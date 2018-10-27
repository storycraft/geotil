import Primitive from "./primitive";
import Triangle from "./triangle";

export default class Quad extends Primitive {
    constructor(point1, point2, point3, point4){
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

    contains(point){
        return new Triangle(this.Point1, this.Point2, this.Point3).contains(point) || new Triangle(this.Point3, this.Point4, this.Point1).contains(point);
    }
}
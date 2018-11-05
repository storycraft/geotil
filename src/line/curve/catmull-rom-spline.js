import LineCurve from "./line-curve";
import Point4D from "../../point/point4D";

export default class CatmullRomSpline extends LineCurve {
    constructor(pointList) {
        super(pointList);
    }

    getPointAt(progress) {
        if (this.PointLength < 4) 
            return new Point4D();

        
    }

    getPointAtUnUniformed(progress) {
        return this.getPointAt(progress);
    }
}
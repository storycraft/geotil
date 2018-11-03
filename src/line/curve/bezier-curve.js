import LineCurve from "./line-curve";
import Line from "../line";
import Point4D from "../../point/point4D";

export default class BezierCurve extends LineCurve {
    constructor(...pointList) {
        super();

        this.pointList  = pointList;
    }

    get PointList() {
        return this.pointList;
    }

    get PointLength() {
        return this.pointList.length;
    }

    get StartPoint() {
        return this.Length == 0 ? null : this.PointList[0];
    }

    get EndPoint() {
        return this.Length == 0 ? null : this.PointList[this.PointList.length - 1];
    }

    getPointAt(progress) {
        //TODO
    }

    getInflectedPointAt(progress) {
        if (this.PointLength < 1)
            return new Point4D();

        progress = Math.max(Math.min(progress, 1), 0);

        var n = this.PointLength - 1;
        var a = 1;

        var point = new Point4D();
        for (var i = 0; i <= n; i++) {
            var o = a * Math.pow(progress, i) * Math.pow(1 - progress, n - i);

            point.X += (this.PointList[i].X || 0) * o;
            point.Y += (this.PointList[i].Y || 0) * o;
            point.Z += (this.PointList[i].Z || 0) * o;
            point.W += (this.PointList[i].W || 0) * o;

            a *= (n - i) / (i + 1);
        }

        return point;
    }
}
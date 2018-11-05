import LineCurve from "./line-curve";
import Line from "../line";
import Point4D from "../../point/point4D";
import MultiLine from "../multi-line";

export default class BezierCurve extends LineCurve {
    constructor(pointList) {
        super(pointList);
    }

    toMultiLine(division = BezierCurve.ARC_LENGTH) {
        var lineList = [];

        if (this.PointLength > 1) {
            var lastPoint = this.StartPoint;
            for(let i = 1; i <= division; i += 1) {
                var point = this.getPointAtUnUniformed(i / division);
                lineList[i - 1] = (new Line(lastPoint, point));

                lastPoint = point;
            }
        }

        return new MultiLine(lineList);
    }

    get Length() {
        return this.toMultiLine().Length;
    }

    get SquareLength() {
        return this.toMultiLine().SquareLength;
    }

    getPointAt(progress) {
        return this.toMultiLine().getPointAt(progress);
    }

    getPointAtUnUniformed(progress) {
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

BezierCurve.ARC_LENGTH = 75;
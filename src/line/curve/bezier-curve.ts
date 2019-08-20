import LineCurve from "./line-curve";
import Line from "../line";
import Point4D from "../../point/point4D";
import MultiLine from "../multi-line";
import Point from "../../point/point";
import { LineAbstract } from "../..";

export default class BezierCurve<T extends Point> extends LineCurve<T> {

    static readonly DIVISION: number = 75;

    private pointList: Array<T>;

    constructor(pointList: Array<T>) {
        super();

        this.pointList = pointList;
    }

    get PointList() {
        return this.pointList;
    }

    toMultiLine(division = BezierCurve.DIVISION) {
        var lineList: Array<LineAbstract<T>> = [];

        if (this.PointLength > 1) {
            var lastPoint = this.StartPoint;
            for(let i = 1; i <= division; i += 1) {
                var point = this.getPointAtUnUniformed(i / division);
                lineList[i - 1] = (new Line(lastPoint, point));

                lastPoint = point;
            }
        }

        return new MultiLine<T>(lineList);
    }

    get Length() {
        return this.toMultiLine().Length;
    }

    get SquareLength() {
        return this.toMultiLine().SquareLength;
    }

    getClosestProgressFrom(point: T) {
        return this.toMultiLine().getClosestProgressFrom(point);
    }
    
    getClosestPointFrom(point: T) {
        return this.toMultiLine().getClosestPointFrom(point);
    }

    getPointAt(progress: number) {
        return this.toMultiLine().getPointAt(progress);
    }

    getPointAtUnUniformed(progress: number) {
        if (this.PointLength < 1)
            return <T> <any> new Point4D();

        progress = Math.max(Math.min(progress, 1), 0);

        var n = this.PointLength - 1;
        var a = 1;

        var point = new Point4D();
        for (var i = 0; i <= n; i++) {
            var o = a * Math.pow(progress, i) * Math.pow(1 - progress, n - i);

            let targetPoint = Point4D.copy(this.PointList[i]);

            point = point.add(targetPoint.X * o, targetPoint.Y * o, targetPoint.Z * o, targetPoint.W * o);

            a *= (n - i) / (i + 1);
        }

        return <T> <any> point;
    }
}
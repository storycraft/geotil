import LineCurve from "./line-curve";
import Line from "../line";

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
        var n = this.PointLength - 1;

        var inlineList = [];

        for (var i = 0; i < n;i++) {
            var line = new Line(this.PointList[i], this.PointList[i + 1]);

            inlineList.push(line);
        }
        
        while (inlineList.length > 1) {
            var size = inlineList.length - 1;

            var nextLineList = [];
            for (var i = 0; i < size; i++) {
                var line = new Line(inlineList[i].getPointAt(progress), inlineList[i + 1].getPointAt(progress));
                nextLineList.push(line);
            }

            inlineList = nextLineList;
        }

        return inlineList[0].getPointAt(progress);
    }
}
import LineAbstract from "../line-abstract";

export default class LineCurve extends LineAbstract {
    constructor(pointList) {
        super();

        this.pointList = pointList;
    }

    get PointList() {
        return this.pointList;
    }

    get PointLength() {
        return this.PointList.length;
    }

    get StartPoint() {
        return this.PointLength < 1 ? null : this.PointList[0];
    }

    get EndPoint() {
        return this.PointLength < 1 ? null : this.PointList[this.PointLength - 1];
    }

    getPointAtUnUniformed(progress) {
        
    }
}
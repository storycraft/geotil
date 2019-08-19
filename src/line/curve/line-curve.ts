import LineAbstract from "../line-abstract";
import Point from "../../point/point";
import Point4D from "../../point/point4D";
import { MultiLine } from "../..";

export default abstract class LineCurve<T extends Point> extends LineAbstract<T> {

    abstract get PointList(): Array<T>;

    get PointLength() {
        return this.PointList.length;
    }

    get StartPoint() {
        return this.PointLength < 1 ? <T> <any> new Point4D() : this.PointList[0];
    }

    get EndPoint() {
        return this.PointLength < 1 ? <T> <any> new Point4D() : this.PointList[this.PointLength - 1];
    }

    abstract toMultiLine(division: number): MultiLine<T>;

    abstract getPointAtUnUniformed(progress: number): T;
}
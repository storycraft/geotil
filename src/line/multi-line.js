import Point4D from "../point/point4D";
import LineAbstract from "./line-abstract";

export default class MultiLine extends LineAbstract { 
    constructor(...lineList) {
        super();
        this.lineList = lineList;
    }

    get LineList() {
        return this.lineList;
    }

    get SquareLength() {
        var length = 0;

        for (var line of this.LineList) {
            length += line.SquareLength;    
        }

        return length;
    }

    get Length() {
        var length = 0;

        for (var line of this.LineList) {
            length += line.Length;    
        }

        return length;
    }

    getPointAt(progress, uniformed) {
        if (this.LineList.length < 1)
            return new Point4D();

        progress = Math.max(Math.min(progress, 1), 0);

        let length = this.Length;

        let a = length * progress;
        let b = 0;
        let targetLength = 0;
        let targetLine = null;
        for (var line of this.LineList) {
            targetLength = line.Length;

            if (b < a && b + targetLength > a) {
                targetLine = line;
                break;
            }

            b += line.Length;
        }

        let lineProgress = (progress - (b / length)) / (targetLength / length);

        return uniformed && targetLine.getPointAtUnUniformed ? targetLine.getPointAtUnUniformed(lineProgress) : targetLine.getPointAt(lineProgress);
    }

    getPointAtUnUniformed(progress) {
        return this.getPointAt(progress, true);
    }
}
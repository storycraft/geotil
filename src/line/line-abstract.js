export default class LineAbstract {
    constructor() {

    }

    get StartPoint() {
        return null;
    }

    get EndPoint() {
        return null;
    }

    get SquareLength() {
        return 0;
    }

    get Length() {
        return 0;
    }

    getClosestProgressFrom(point) {
        return 0;
    }

    getClosestPointFrom(point) {
        return null;/*Point Object*/
    }

    getPointAt(progress) {
        return null;/*Point Object*/
    }
}
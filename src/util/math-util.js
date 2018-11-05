export default class MathUtil {
    static lerp(start, end, progress) {
        return start + (end - start) * progress;
    }
}
export function getStudentsByLocation(arrayParam = [], filterParam) {
    if (!Array.isArray(arrayParam)) {
        return [];
    }
    return arrayParam.filter((val) => val.location === filterParam);
}

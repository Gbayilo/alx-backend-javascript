export function getStudentIdsSum(arrayParam = []) {
    if (!Array.isArray(arrayParam)) {
        return [];
    }

    return arrayParam.reduce(
        (accumulator, currentValue) => accumulator + currentValue.id,
        0
    );
}

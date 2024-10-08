export default function getStudentIdsSum(studentsList) {
    if (!Array.isArray(studentsList)) {
        throw new TypeError('studentsList must be an array');
    }

    return studentsList.reduce((accumulator, student) => {
        if (!Number.isInteger(student.id)) {
            throw new TypeError('studentId must be an integer');
        }
        return accumulator + student.id;
    }, 0);
}

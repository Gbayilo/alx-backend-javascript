export function updateStudentGradeByCity(
    students = [],
    city = "",
    grades = []
) {
    const defaultGrade = { grade: "N/A" };
    if (!Array.isArray(students)) {
        return [];
    }

    return students
        .filter((student) => student.location === city)
        .map((student) => ({
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: (
                grades.filter((grade) => grade.studentId === student.id).pop() ||
                defaultGrade
            ).grade,
        }));
}

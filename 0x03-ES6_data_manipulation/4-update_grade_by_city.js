export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('studentsList must be an array');
  }

  if (!Array.isArray(newGrades)) {
    throw new TypeError('newGrades must be an array');
  }

  if (typeof city !== 'string') {
    throw new TypeError('city must be a string');
  }

  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return Object.assign(student, { grade: gradeObj ? gradeObj.grade : 'N/A' });
    });
}

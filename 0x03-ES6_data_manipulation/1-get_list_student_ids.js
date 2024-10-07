function getListStudentIds(arrayParam = []) {
  if (!Array.isArray(arrayParam)) {
    return [];
  }

  return arrayParam.map((val) => val.id);
}

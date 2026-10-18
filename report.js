const withStatus = students => {
  const result = [];
  for (const student of students) {
    result.push({ ...student, status: student.grade >= 56 ? "pass" : "fail" });
  }
  return result;
};

export default withStatus;

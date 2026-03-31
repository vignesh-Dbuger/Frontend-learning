
const processedData = students.map(student => {
  const className = classes.find(c => c.id === student.classId)?.name || "N/A";
  const totalScore = student.grades.reduce((sum, g) => sum + g.score, 0);
  const averageScore = totalScore / student.grades.length;
  const highestGrade = student.grades.reduce((prev, current) => 
    (prev.score > current.score) ? prev : current
  );
  return {
    name: student.name,
    className,
    averageScore: averageScore.toFixed(2),
    highestSubject: highestGrade.subject
   
  };
});

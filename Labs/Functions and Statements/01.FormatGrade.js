function formatGrade(grade) {
  let gradeToFixed = grade.toFixed(2);
  if (grade < 3) {
    console.log(`Fail (2)`);
  } else if (grade < 3.5) {
    console.log(`Poor (${gradeToFixed})`);
  } else if (grade < 4.5) {
    console.log(`Good (${gradeToFixed})`);
  } else if (grade < 5.5) {
    console.log(`Very good (${gradeToFixed})`);
  } else {
    console.log(`Excellent (${gradeToFixed})`);
  }
}
formatGrade(4.4);

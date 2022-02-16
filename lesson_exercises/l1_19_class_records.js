let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const NUM_EXAMS = 4;
const EXAM_WEIGHT = 0.65;
const EXERCISE_WT = 0.35
// const NUM_EXERCISES = studentScores.student1.scores.exercises.length

function examsGrade(examScores) {
  return examScores.reduce((sum, num) => sum += num) / NUM_EXAMS;
}

function exercisesGrade(exerciseGrades) {
  return exerciseGrades.reduce((sum, num) => sum += num);
}

function getStudentGrades(scores) {
  let results = []
  let students = Object.keys(scores);
  for (let student of students) {
    let exams = examsGrade(scores[student].scores.exams);
    let exercises = exercisesGrade(scores[student].scores.exercises);
    results.push(Math.round(exams * EXAM_WEIGHT + exercises * EXERCISE_WT));
  }
  return results;
}

function getLetterGrade(score){
  if (score >= 93 ) return 'A';
  if (score >= 85 ) return 'B';
  if (score >= 77 ) return 'C';
  if (score >= 69 ) return 'D';
  if (score >= 60 ) return 'E';
  return 'F'
}

function getFullGrade(score) {
  return `${score} (${getLetterGrade(score)})`;
}

function getMinGrade(examGrades) {
  return Math.min(...examGrades);
}

function getMaxGrade(examGrades) {
  return Math.max(...examGrades);
}

function getAvgGrade(examGrades, numStudents) {
  let sumGrades = examGrades.reduce((sum, grade) => sum += grade);
  return Number((sumGrades / numStudents).toFixed(1));
}

function examGrades(scores) {
  let results = [];
  let students = Object.keys(scores);
  let numStudents = students.length;

  for (let exam = 0; exam < NUM_EXAMS; exam += 1) {
    let examScores = [];

    for (let idx = 0; idx < students.length; idx += 1) {
      examScores.push(scores[students[idx]].scores.exams[exam]);
    }
    results.push({ average: getAvgGrade(examScores, numStudents),
                  minimum: getMinGrade(examScores),
                  maximum: getMaxGrade(examScores),
                });
  }
  return results;
}

function generateClassRecordSummary(scores) {
  let result = {};
  let gradesNumeric = getStudentGrades(scores);
  result.studentGrades = gradesNumeric.map(number => {
    return getFullGrade(number)
  });
  result.exams = examGrades(scores);
  return result;
}

console.log(generateClassRecordSummary(studentScores));
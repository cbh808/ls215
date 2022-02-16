/*
Practice Problem: Class Records Summary

Prepare a class record summary for students based on weighted scores of exams
and exercises.
Weights:
Grading Area 	Weight
Exam 	65%
Exercises 	35%

Each term has four exams, and several exercises. 
Every exam has a fixed maximum score of 100

Exercises have varied maximum score values and counts
The total maximum point value for all exercises in any term is 100
  regardless of how many exercises the students had to complete
Example:
a term may have five exercises with possible score maximums of [30, 20, 10, 20, 20]
another term may have three exercises with possible score maximums of [20, 30, 50].

To determine a student's grade
  - determine student's average score from the four exams 
    Round the exam averages to one digit after the decimal point.
  - sum all the exercise scores
  - apply the weights to compute the student's final percent grade
  - determine letter equivalent grade from student's percent grade
Percent Grade 	Letter Equivalent
93 - 100 	A
85 - 92 	B
77 - 84 	C
69 - 76 	D
60 - 68 	E
0 - 59 	F

EXAMPLE
term with three exercises with maximum scores of [20, 30, 50]
A student got [90, 80, 95, 71] on four exams
[20, 15, 40] on exercises

    Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
    Compute the student's total exercise score: 20 + 15 + 40 = 75
    Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
    Round the percent grade to the nearest integer: 81
    Lookup the letter grade in the table above: C
    Combine the percent grade and letter grade: "81 (C)"

Source Data and Class Record Summary Format
We store the student data in an object that looks like this:

let studentScores = {
  student1: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
  student2: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
  student3: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
  studentN: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
};

// The output class record summary should look like this:

{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

Data Structures:
input: object of students with values being objects with id & scores 
       scores values are objects with 
        exams key & array of values
        exercises key & array of values

output: object with:
        key: studentGrades with value an array of strings (number grade and letter)
        key: exams with an array value containing objects as elements
          average, minimum, maximum of each exam taken for all students grades

Algorithm:
Write function that takes a studentScores object as arg
declare studentGrades array and set to empty array
declare exams array and set to empty array
For each student
  - determine exams average
  - determine sum of exercises
  - determine numerical grade
  - determine letter grade
  - concatenate numerical grade and letter grade and push to grades array
For each exam, iterate over students to extract grade
declare exam-n for each exam and assign to empty 
create helper min and set to min of exam-n array
create helper max and set to max of exam-n array
create helper avg and set to avg of exam-n array, rounding to one decimal point
create obj-n and fill with key / value pairs (as calculated)
Returns class record summary object.

*/
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
    results.push(Math.round(exams * .65 + exercises * .35));
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
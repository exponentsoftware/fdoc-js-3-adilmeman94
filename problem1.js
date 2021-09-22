/* problem -1 */

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

// A junior developer structure student name, skills and score in array of arrays which may
//  not easy to read. Destruction the following array name to name, skills array to skills,
//   scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
// const [Name, Skills, Score] = students;
// console.log(Name, "name");
// console.log(Skills, "skills");
// console.log(Score, "score");
// a. Write a function called convertArrayToObject which can convert the array to a structured object.

const convertArrayToObject = (students) => {
  const collection = students.map((item) => {
    return { name: item[0], skills: item[1], scores: item[2] };
  });
  return collection;
};

// console.log(convertArrayToObject(students));

/* b. Copy the student object to newStudent without mutating the original object. In the new object add the 
   following ?

	1. Add Bootstrap with level 8 to the front end skill sets
	2. Add Express with level 9 to the back end skill sets
	3. Add SQL with level 8 to the data base skill sets
	4. Add SQL without level to the data science skill sets */

const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

var newObj;

const copiedObject = (obj1, obj2, obj3, data) => {
  student.skills.frontEnd.push(obj1);
  student.skills.backEnd.push(obj2);
  student.skills.dataBase.push(obj3);
  student.skills.dataScience.push(data);
  newObj = student;
  return newObj;
};

// console.log(
//   copiedObject(
//     { skill: "BootStrap", level: 8 },
//     { skill: "Express", level: 9 },
//     { skill: "SQL", level: 8 },
//     "SQL"
//   )
// );

// b(1) Find the length of student object keys ;
const lengthObjKey = () => {
  var count = 0;
  for (var k in student) {
    if (student.hasOwnProperty(k)) {
      ++count;
    }
  }
  return count;
};

// console.log(lengthObjKey());

// b(2). Find the length of the student object values

const lengthObjValue = () => {
  const lenObjVal = Object.values(student);
  console.log(lenObjVal, "lenobjval");
  return lenObjVal.length;
};

// console.log(lengthObjValue());

// b(3). Find the length of skills object keys

const lengthSkillsKeys = () => {
  const lenskillkey = Object.keys(student.skills);
  console.log(lenskillkey, "lenskillkey");
  return lenskillkey.length;
};

// console.log(lengthSkillsKeys());

// b(4). check if the student object has graphicDesign property

// dont know about graphicDesign property

// b(5). Iterate the keys of the student object

const iterateObjKey = () => {
  for (var k in student) {
    console.log(k, "key");
  }
};

iterateObjKey();

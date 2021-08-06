function SchoolMember(name, age) {
  const privateData = 'private'; // private data
  this.name = name; // public data
  this.age = age; // public data
  this.checkPrivate = privateData === 'private'; // public data
  // protected data
  Object.defineProperty(this, '_protectedData', {
    get (){
      return 'protected';
    },
  })
}

function Student(name, age, grade) {
  SchoolMember.apply(this, [name, age]);
  this.grade = grade;
}

const schoolMember = new SchoolMember('hau', 21);
const student = new Student('hau', 21, 10);
// console.log(schoolMember);
// console.log(student);
class SchoolMember{
  #privateData = 'private'; // private data
  
  constructor(name, age) {
    this.name = name; // public data
    this.age = age; // public data
    this.checkPrivate = this.#privateData === 'private'; // public data 
  }
  
  // protected data
  get _protectedData() {
    return 'protected'
  }
}
  
class Student extends SchoolMember {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

const schoolMember = new SchoolMember('hau', 21);
const student = new Student('hau', 21, 10);
// console.log(schoolMember);
// console.log(student);
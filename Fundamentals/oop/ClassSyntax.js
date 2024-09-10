/*
Class syntax
------------
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const student1 = new Student("rehman ali", "virk");
console.log(student1);   
                
*/

//-----------------------------------------------

/* 
Instance Methods
----------------

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

const student1 = new Student("rehman ali", "virk");
const student2 = new Student("sultan ahmad", "virk");
const student1FullName = student1.fullName();
const student2FullName = student2.fullName();

console.log(student1FullName);
console.log(student2FullName);
*/
// --------------------------------------------

// Class Methods
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static EnrollStudents(firstName, lastName) {
    return `Enrolled students ${firstName} ${lastName} `;
  }
}

const student1 = new Student("rehman ali", "virk");
const student2 = new Student("sultan ahmad", "virk");
console.log(Student.EnrollStudents("lionel", "messi"));

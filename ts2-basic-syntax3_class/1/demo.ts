class Person {
  name: string = 'noodles';

  getName() {
    return this.name;
  }
}

const person = new Person();
console.log(person.getName())

class Teacher extends Person {
  getTeacherName() {
    return 'teacher'
  }
  getName() {
    return super.getName() + 'lee'
  }
}
const teacher = new Teacher();
console.log(teacher.getName())
console.log(teacher.getTeacherName())
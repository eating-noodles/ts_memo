// note: constructor
// class Person {
//   // 传统写法
//   // name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }

//   // 简化写法
//   constructor(public name: string) { }
// }

// const p = new Person('dell');
// console.log(p.name)

// note: 
class Person {
  constructor(public name: string) { }
}
class Teacher extends Person {
  constructor(public age: number) {
    super('dell');
  }
}

const teacher = new Teacher(23);
console.log(teacher.age);
console.log(teacher.name);
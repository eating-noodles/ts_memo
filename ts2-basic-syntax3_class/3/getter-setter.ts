// getter & setter
// class Person {
//   constructor(private _name: string) { }

//   get name() {
//     // note: 可以对私有属性进行一些处理，再进行返回
//     return this._name + 'lee';
//   }

//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person = new Person('noodles')
// // note: 这里获取不到_name属性，因为这个属性是私有的
// // person._name;
// // note: 这里可以获取到person的name，访问器属性
// person.name;


// // note: 同理，无法直接对_name进行赋值，因为是私有的
// // person._name = 'dell';
// // note: 所以我们可以通过setter对person进行属性设置
// person.name = 'noodles eating'
// console.log(person.name)

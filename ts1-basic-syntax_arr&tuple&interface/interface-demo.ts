// note: age为可选属性，那么为必填属性
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
}

interface Teacher1 extends Person {
  teacher(): string
}

const getPersonName = (person: Person) => {
  console.log(person.name)
}

const setPersonName = (person: Person, name: string) => {
  person.name = name
}

const person = {
  name: 'noodles',
}

getPersonName(person)
setPersonName(person, 'nan')

interface SayHi {
  (word: string): string;
}

const say: SayHi = (word: string) => 'test'
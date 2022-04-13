// note: 数组
const numberArr: (number | string)[] = [1, 2, 3];

const objArr: {name: string}[] = [{
  name: 'noodles'
}]

type User = { name: string }
const objectArr: User[] = [{
  name: 'noodles'
}]

class Teacher {
  name: string | undefined;
}

const objectArr1: Teacher[] = [
  new Teacher(),
  {
    name: 'noodles'
  }
]
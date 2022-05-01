// note: 抽象类
abstract class Geom {
  width: number;
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea(): number {
    return 10;
  }
}

class Square extends Geom {
  getArea(): number {
    return 101;
  }
}

class Triangle extends Geom {
  getArea(): number {
    return 1011;
  }
}

// note: 接口
interface Person {
  name: string
}

interface Teacher extends Person {
  teachingAge: number,
}

interface Student extends Person {
  age: number
}

const teacher = {
  name: 'dell',
  teachingAge: 10
}

const student = {
  name: 'noodles',
  age: 18
}

const getuserInfo = (user: Person)=> {
  console.log(user.name)
}

getuserInfo(teacher)
getuserInfo(student)
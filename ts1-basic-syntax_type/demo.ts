// 基础类型
const count: number = 2019;
const nm: string = 'noodles';

// 对象类型
// 类
class Person {}

// 自定义对象
const teacher: {
  name: string;
  age: number;
} = {
  name: 'noodles',
  age: 18
};

// 数组
const numbers: number[] = [1, 2, 3];

const noodles: Person = new Person();
// 函数
const getTotal: () => number = () => 13;
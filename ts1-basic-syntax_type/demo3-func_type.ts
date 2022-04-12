// note: 定义函数
function hello() { }
const hello1 = function () { }
const hello2 = () => { }

// 函数返回值为空
function sayHello(): void {
  console.log('hello')
}

// note: 这个函数不可能会执行到console方法
function errorEmitter(): never {
  throw new Error();
  console.log('--')
}

// note: 这个函数陷入到循环中，while后面的东西永远执行不到，这个函数永远执行不完
function errorEmitter1(): never {
  while(true) { }
}

// note: 解构语法声明类型
function add({ first, second }: {first: number, second: number}): number {
  return first + second;
}
const total = add({ first: 1, second: 2 })

const func = (str: string): number => {
  return parseInt(str, 10)
}

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10)
}
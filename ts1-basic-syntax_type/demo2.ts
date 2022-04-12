// type annotation 类型注解
let count1: number;
count1 = 123;

// type inference 类型推断
let countInference = 456;

// 如果ts能够自动分析变量的类型，我们就什么也不需要做；如果ts无法分析变量的话，我们就需要使用类型注解
function getTotal1(firstNum, secNum) {
  return firstNum + secNum
}
const total1 = getTotal1(1, 2)
const total2 = getTotal1(1, '2')
// note: 单例模式，只想Demo有一个实例
class Demo {
  // 静态 私有变量
  private static instance: Demo;
  // note: 构造方法设置为私有，以为这外部无法访问，也就无法使用new来创建新对象
  private constructor(public name: string) { }
  
  static getInstance() { 
    if (!this.instance) {
      this.instance = new Demo('noodles')
    }

    return this.instance
  }
  
}

const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()

console.log(demo1.name)
console.log(demo2.name)
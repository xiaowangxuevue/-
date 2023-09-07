// 联合类型
let myPhone:number | string  = '010-820'

//let myPhone2:number | string = ture 

//函数使用联合类型

const fn = (something:number | string):boolean =>{
    return !!something
}

fn(123)


// 交叉类型
interface person {
  age:number,
  height:number,
  [PropName:string]:any
}

interface man {
    sex?:string
}

const zhoutao:(person & man) = {
    age:22,
    height:170,
    abc:'asd'
}

// 类型断言
interface A {
    run: string
}

interface B {
    build: number,
}

const fn2 = (type: A | B): string => {
    return (type as A).run
}

//这样写是有警告的应为B的接口上面是没有定义run这个属性的

//需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：


//使用any临时断言
// window.abc =3 报错不存在
(window as any).abc = 123

//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。

// 数组
let arr1 = [12,13] as const
const arr2 = [12,13]

//arr1.unshift(14), //错误，此时已经断言字面量为[10,20],数据无法做任何修改

arr2.unshift(14)


//类型断言是不具影响力的
//在下面的例子中，将 something 断言为 boolean 虽然可以通过编译，但是并没有什么用 并不会影响结果, 因为编译过程中会删除类型断言


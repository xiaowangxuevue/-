//这样写是会报错的 因为我们在person定义了a，b但是对象里面缺少b属性
//使用接口约束的时候不能多一个属性也不能少一个属性
//必须与接口保持一致
interface Person {
    aaa: string,
    bbb?: string //可选属性使用？操作符
}

const person: Person = {
    aaa: '123',

}

//继承

//1.同名继承
interface A { zhou: string }
interface A { tao: String }

const useA: A = {
    zhou: '213',
    tao: '123'
}

//2.extends 继承
interface B extends A { }

const useB: B = {
    zhou: 'sadas',
    tao: 'sdadasda'
}


//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
interface Person3 {
    b?: string,
    readonly a: string,
    [propName: string]: any
}

const person22: Person3 = {
    a: "213",
    c: "123"
}

// person22.a =123

interface pers {
    cd: () => void
}

const p: pers = {
    cd: () => console.log(123)
    
}
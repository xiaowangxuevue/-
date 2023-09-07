//any 类型和 unknown 顶级类型

// any类型可以随时切换任何类型

//1
let anys:any = 123
anys = undefined
anys = 'hh'
//2
let anyas;
anyas = '23'
anyas = true


// unknown也是 top type,更安全


//unknown 可以定义任何类型的值
let value: unknown;
 
value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = null;             // OK
value = undefined;        // OK
value = Symbol("type");   // OK



//区别 any和unknown

// 1.unknown可赋值的对象只有 nuknown 和 any
let aaa:unknown = 123
let bbb:any ="str123"

aaa = bbb


//如果是any类型在对象没有这个属性的时候还在获取是不会报错的
let obj1:any = {b:1}
obj1.a
 
 
//如果是unknow 是不能调用属性和方法
let obj2:unknown = {b:1,ccc:():number=>213}
// obj2.b
// obj2.ccc()
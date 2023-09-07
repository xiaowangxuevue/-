// 联合类型
var myPhone = '010-820';
//let myPhone2:number | string = ture 
//函数使用联合类型
var fn = function (something) {
    return !!something;
};
fn(123);
var zhoutao = {
    age: 22,
    height: 170,
    abc: 'asd'
};
var fn2 = function (type) {
    return type.run;
};
//这样写是有警告的应为B的接口上面是没有定义run这个属性的
//需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：

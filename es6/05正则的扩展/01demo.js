/**
 * autor:       daxue
 * description:  正则表达式的扩展
 *
 *
 */
const a = '123';
/*
字符转和正则有关系的函数:
    match()    查找到的结果返回
    replace()  替换匹配的值
    search()
    split()
 */

console.log(/^.$/.test('a')) //true
var s = '𠮷';

console.log(/^.$/.test(s)) // false
console.log(/^.$/u.test(s)) // true

let reg = RegExp(/^[0-9][a-z]$/,'ug');
console.log(reg.unicode);

console.log('aaa-acad'.replace(/a/gy,'+'))


// 使用参数默认值时，函数不能有同名参数。
// 不报错
function foo(x, x, y) {
    // ...
}

// 报错
// function foo(x, x, y = 1) {
    // ...
// }
// SyntaxError: Duplicate parameter name not allowed in this context

//es6尾调用优化下的递归fib数列,不会出现栈溢出错误
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
    if( n <= 1 ) {return ac2};

    return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

console.log(Fibonacci2(100));


const a1 = [1,2,3]
const  a2 = [...a1]
for (let i = 0; i < a2.length; i++) {
    console.log(a2[i]);
}

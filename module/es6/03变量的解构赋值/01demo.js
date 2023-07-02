console.log("基础很重要")
// 解构
// let [a, b, c] = [1, 2, 3];
//
// console.log(a,b,c);

// 实现了Iterator接口,大多都可以使用数组形式的解构

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first,second,third,fourth,fifth,sixth)

let q = {a:7, b:8, c:[1,2,3]}

let {a, b, c} = q;
console.log(a, b, c);

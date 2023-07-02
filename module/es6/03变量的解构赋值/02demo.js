/**
 * autor:           daxue
 * description:     关于es6字符串扩展
 */


console.log(String.fromCodePoint(0xA2BC));
console.log(String.fromCodePoint(0x20BB7));
console.log(String.fromCodePoint(0x22838))

console.log("大a".codePointAt(0).toString())
console.log('大a'.codePointAt(1).toString())


console.log('abcd'.indexOf('a'))
console.log('abcdef'.includes('abc')) //表示从第几个字符开始
console.log('abcd'.startsWith('ab'))  //表示从第几个字符开始
console.log('abcdef'.endsWith('d',4))   //都支持第二个参数,表示前多少个字符


let e = 'no'.repeat('2.3');
console.log(e)

//补全在头部,主用于字符串格式提示
console.log('-10:30'.padStart(14,'YY-MM-DD-HH:TT'));

function passthru(literals, ...values) {
    let output = "";
    let index;
    for (index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }

    output += literals[index]
    return output;
}
console.log(passthru`this is ${e} good`)


//“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。

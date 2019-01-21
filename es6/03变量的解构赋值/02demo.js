console.log(String.fromCodePoint(0xA2BC));
console.log(String.fromCodePoint(0x20BB7));
console.log(String.fromCodePoint(0x22838))

console.log("大a".codePointAt(0).toString())
console.log('大a'.codePointAt(1).toString())


console.log('abcd'.indexOf('a'))
console.log('abcdef'.includes('abc')) //表示从第几个字符开始
console.log('abcd'.startsWith('ab'))  //表示从第几个字符开始
console.log('abcdef'.endsWith('d',4))   //都支持第二个参数,表示前多少个字符



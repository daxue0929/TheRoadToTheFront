// 1. js类型声明
let a: string
let b: number
let c: boolean
let d: null
let e: undefined
let f: bigint
let g: symbol
let h: object
// 1.1. ts类型
let ab: any
let ac: unknown
let ad: never
let ae: void
let af: [string, number] // 元组类型
let af1: [number, ...string[]]

enum Direction {
    Up,
    Down,
    Left,
    Right
}

// 1.2 定义类型的两种方式
// type
// interface

a = "hello"
b = 100
b = 66
c = true

function demo(x: number, y: number): number {
    return x + y
}

let r = demo(100, 200)
console.log(r)




console.log("------end------")
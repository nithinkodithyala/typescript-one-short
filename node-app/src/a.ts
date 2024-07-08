function hello(params:string) {
    console.log("hello"+params)
}
// console.log(x);
hello("nithin")
function sum(a:number , b:number) :number{
    return a+b
}
console.log(sum(10,2))
function age(a: number) {
    if(a> 18){
        return true
    }
    else {
        return false
    }
}
console.log(age(23))

function time(fn:()=>void) {
    setTimeout(fn,1000)
}

time( function () {
    console.log("hiiiiii");
})

const greet =(name: string) => `hello ${name}`
console.log(greet("nithu"))

// Interfaces
// types are used to deal with unions and intersections
const user = {
	firstName: "nithin",
	lastName: "k",
	email: "email@gmail.com",
	age: 21
}
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

console.log(age(user.age))

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
class Emp implements Person {
    name: string
    age:number
    constructor (n:string,a:number) {
        this.name=n;
        this.age=a;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }

}

/// arrays in ts

function arr ( a:number []) {
    let max=0;
    for(let i=0;i<a.length;i++) {
        if(a[i]>max) 
        {    max=a[i]
        }
    }
    return max

}
console.log(arr([1,2,4,2,7]))

/// enums are ts features they allow named constants 
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(k: Direction) {
	// do something.
    if(k==Direction.Up){
        console.log("up")
    }
}

doSomething(Direction.Up)
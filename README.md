# 1. Strongly typed vs loosely typed
The terms strongly typed and loosely typed refer to how programming languages handle types, particularly how strict they are about type conversions and type safety.
**Strongly typed languages**
Examples - Java, C++, C, Rust
Benefits - 
Lesser runtime errors
Stricter codebase
Easy to catch errors at compile time

**Loosely typed languages**
Examples - Python, Javascript, Perl, php
Benefits
Easy to write code
Fast to bootstrap
Low learning curve

**What is typescript?**
TypeScript is a programming language developed and maintained by Microsoft. 
It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

**Where/How does typescript code run?**
Typescript code never runs in your browser. Your browser can only understand javascript. 
Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
Typescript is something that compiles down to javascript
When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 
Typescript compiler
tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
esbuild
swc

# The tsc compiler
Let’s bootstrap a simple Typescript Node.js application locally on our machines
 
-> Step 1 - Install tsc/typescript globally
npm install -g typescript

-> Step 2 - Initialize an empty Node.js project with typescript
mkdir node-app
cd node-app
npm init -y
npx tsc --init
These commands should initialize two files in your project
notion image
 
Step 3 - Create a a.ts file
const x: number = 1;
console.log(x);

Step 4 - Compile the ts file to js file
tsc -b

Step 5 - Explore the newly generated index.js file
Notice how there is no typescript code in the javascript file. It’s a plain old js file with no types

Step 6 - Delete a.js

Step 7 - Try assigning x to a string
Make sure you convert the const to let
let x: number = 1;
x = "nithin"
console.log(x);

Step 8 - Try compiling the code again
tsc -b

Notice all the errors you see in the console. This tells you there are type errors in your codebase.
Also notice that no index.js is created anymore
This is the high level benefit of typescript. It lets you catch type errors at compile time
 

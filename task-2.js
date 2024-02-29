/*
TASKS=>
1. Write an arrow function which returns the product of two numbers
2. Create a student object
*/

// 1.
const product=(a,b)=>a*b;
console.log(product(2,3));

// 2.
// There are multiple ways to do it.
// i) Using Object Literal
const studentObj={
    name:'Thejus',
    age:'25',
    role:'Full Stack Developer',
    intro(){
        console.log('Hey! I am '+this.name+', age '+this.age+' and I am a '+this.role);
    }
};
studentObj.intro();
/*
TASKS=> What will be the output of this
1)	console.log('a');
    console.log('b');
    setTimeout(() => console.log('c'), 3000)
    console.log('d');
2)   console.log('a');
    console.log('b');
    setTimeout(() => console.log('c'), 3000)
    setTimeout(() => console.log('d'), 0)
    console.log('e');
CHALLENGE)  Can you make the above code print in the following sequence using promises and async/await. Write the code and paste it here
Expected Output
a
b
c
d
e
*/

// 1-i.
'a'
'b'
'd'
'c'
// 1-ii.
'a'
'b'
'e'
'd'
'c'
// 2.
'Done'
async function x(){
    console.log('a');
    console.log('b');
    await (async()=>await new Promise(resolve=>setTimeout(() => resolve(console.log('c')), 3000)))();
    await (async()=>await new Promise(resolve=>setTimeout(() => resolve(console.log('d')), 0)))();
    console.log('e');
}
x();
/*
TASKS=>
1) Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps
2) What will be the output of this
i) 	const obj1 = {'key1': 1}
	const obj2 = { ...obj1}
	if(obj2 === obj1){
		console.log('same objects')
	}
	else{
		console.log('different objects')
	}
ii) const obj1 = {'key1': 1 , 'key2' : 2}
	const obj2 = { ...obj1, key1: 1000}
	console.log(obj1)
	console.log(obj2)
*/

// 1).
const fruits=['apple','oranges',' ','mango',' ','lemon'];
console.log(fruits.map(fruit=>fruit===' '?'empty string':fruit));

// 2i). Output=>
'different objects'
// 2ii). Output=>
"{'key1': 1000 , 'key2' : 2}"
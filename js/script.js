//Variabili A
let lifeA = document.querySelector('#life-a_my');
let dangerA = document.querySelector('#danger-a_my');
let calculatorA = document.querySelector('#calculate-a');
let insertNameA = document.querySelector('#name_monster-a');
let nameMonsterA = document.querySelector('#name_a');
let resultA = document.querySelector('#result-a');
let clickButtonNameA = document.querySelector('#insert_name-a');
// Variabili B
let lifeB = document.querySelector('#life-b_my');
let dangerB = document.querySelector('#danger-b_my');
let calculatorB = document.querySelector('#calculate-b');

let nameMonsterB = document.querySelector('#name_b');
let clickButtonNameB = document.querySelector('#insert_name-b');
let insertNameB = document.querySelector('#name_monster-b');
let resultB = document.querySelector('#result-b');
// Variabili C
let lifeC = document.querySelector('#life-c_my');
let dangerC = document.querySelector('#danger-c_my');
let calculatorC = document.querySelector('#calculate-c');

let nameMonsterC = document.querySelector('#name_c');
let clickButtonNameC = document.querySelector('#insert_name-c');
let insertNameC = document.querySelector('#name_monster-c');
let resultC = document.querySelector('#result-c');
// Variabili D
let lifeD = document.querySelector('#life-d_my');
let dangerD = document.querySelector('#danger-d_my');
let calculatorD = document.querySelector('#calculate-d');

let nameMonsterD = document.querySelector('#name_d');
let clickButtonNameD = document.querySelector('#insert_name-d');
let insertNameD = document.querySelector('#name_monster-d');
let resultD = document.querySelector('#result-d');
//array

//funzione calcolo

// devo fare in modo di tenere il risultato iniziale e dopo calcolarlo

 function calculatorLife(lifeA, dangerA){
	
	let toltalLifeA = lifeA - dangerA;

	return toltalLifeA;
 }

// eventi 
clickButtonNameA.addEventListener('click', ()=>{
	let nameInsertATotal = insertNameA.value;
	nameMonsterA.innerHTML = nameInsertATotal;
	console.log(nameInsertATotal);
});
 calculatorA.addEventListener('click', ()=>{
	let resultLifeA = calculatorLife(lifeA.value, dangerA.value);
	resultA.innerHTML = resultLifeA;
	
 });
//B

 function calculatorLifeB(lifeB, dangerB){
	
	let toltalLifeB = lifeB - dangerB;

	return toltalLifeB;
 }
// eventi 
clickButtonNameB.addEventListener('click', ()=>{
	let nameInsertBTotal = insertNameB.value;
	nameMonsterB.innerHTML = nameInsertBTotal;
	console.log(nameInsertBTotal);
});
 calculatorB.addEventListener('click', ()=>{
	let resultLifeB = calculatorLifeB(lifeB.value, dangerB.value);
	resultB.innerHTML = resultLifeB;
	
 });

 // C

 function calculatorLifeC(lifeC, dangerC){
	
	let toltalLifeC = lifeC - dangerC;

	return toltalLifeC;
 }
// eventi 
clickButtonNameC.addEventListener('click', ()=>{
	let nameInsertCTotal = insertNameC.value;
	nameMonsterC.innerHTML = nameInsertCTotal;
	console.log(nameInsertCTotal);
});
 calculatorC.addEventListener('click', ()=>{
	let resultLifeC = calculatorLifeC(lifeC.value, dangerC.value);
	resultC.innerHTML = resultLifeC;
	
 });

 //D

 function calculatorLifeD(lifeD, dangerD){
	
	let toltalLifeD = lifeD - dangerD;

	return toltalLifeD;
 }
// eventi 
clickButtonNameD.addEventListener('click', ()=>{
	let nameInsertDTotal = insertNameD.value;
	nameMonsterD.innerHTML = nameInsertDTotal;
	console.log(nameInsertDTotal);
});
 calculatorD.addEventListener('click', ()=>{
	let resultLifeD = calculatorLifeD(lifeD.value, dangerD.value);
	resultD.innerHTML = resultLifeD;
	
 });
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

 
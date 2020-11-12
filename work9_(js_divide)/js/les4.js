//- створити функцію яка виводить масив
let arrofSymbols=['string', 34,6789578, BigInt(2323423423429857242576957), -5.6, 90, 100, 'It is over'];
let arrofNumbers=[30, 34,78, 2323, -5, 90, 100, 10];
let arrofNumbers2=[30, 20,0, 2323, -55, 0, 30, 100];
let arrOfAuto=[{name:'tesla', year:2020},
{name:'VW', year:2010},
{name:'opel', year:2017},
{name:'volvo', year:2013},
{name:'mazda', year:2015}];

let rules = [
	{
		title: 'Первое правило Бойцовского клуба.',
		body: 'Никому не рассказывать о Бойцовском клубе.'
	},
	{
		title: 'Второе правило Бойцовского клуба.',
		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
	},
	{
		title: 'Третье правило Бойцовского клуба.',
		body: 'В схватке участвуют только двое.'
	},
	{
		title: 'Четвертое правило Бойцовского клуба.',
		body: 'Не более одного поединка за один раз.'
	},
	{
		title: 'Пятое правило Бойцовского клуба.',
		body: 'Бойцы сражаются без обуви и голые по пояс.'
	},
	{
		title: 'Шестое правило Бойцовского клуба.',
		body: 'Поединок продолжается столько, сколько потребуется.'
	},
	{
		title: 'Шестое правило Бойцовского клуба.',
		body: 'Поединок продолжается столько, сколько потребуется.'
	},
];

function arrOutput (arr) {
	console.log('Output of array is:');
	for (i of arr)
	console.log(i);
}
//arrOutput(arrofSymbols)

//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.*/
let EmptyArr=[];
function arrRand (arr){
	let min = prompt('Please enter min value of range');
	let max = prompt('Please enter max value of range');
	for (i=0; i<100; i++) {
	EmptyArr[i]=Math.round(Math.random()*(max-min)+min);
	}
	arrOutput(EmptyArr);
	return EmptyArr;
}
//arrRand (EmptyArr);

//- створити функцію яка приймає три числа та виводить та повертає найменьше.
function smallestNumber(a,b,c) {
	if (a < b && a < c) {
		console.log(`The smallest number is: ${a}`);
		return a;
	} else if (b < a && b < c) {
		console.log(`The smallest number is: ${b}`);
		return b;
	}
	else if (c < a && c < b) {
		console.log(`The smallest number is: ${c}`);
		return c;
		}
	}
// 	let small =smallestNumber(23,-2.43,-3.43134);
// console.log(small);

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
function biggestNumber(a,b,c) {
	if (a > b && a > c) {
		console.log(`The biggest number is: ${a}`);
		return a;
	} else if (b > a && b > c) {
		console.log(`The biggest number is: ${b}`);
		return b;
	}
	else if (c > a && c > b) {
		console.log(`The biggest number is: ${c}`);
		return c;
	}
}
// let big=biggestNumber(BigInt(231124132472394632874632426846),4.53,324324324234);
// console.log(big);



//- створити функцію яка приймає будь//-яку кількість чисел, повертає найменьше, а виводить найбільше
function smallBigNumber (arrOfNum){
	let max=0;
	let min=0;
	for (let i=0; i<arrOfNum.length; i++) {
		if(arrOfNum[i]>max){
			max=arrOfNum[i];
		} else if (arrOfNum[i]<min){
			min=arrOfNum[i];
		}
	}
	console.log(`Biggest value is ${max}`);
	return min;
	}
// let smalbig=smallBigNumber([1,2,3,4,5,3,-4,435234,34,32,-102,-1212, 2342]);
// console.log(smalbig);

//- створити функцію яка виводить масив

arrOfString=[true,false, 'Roman is student', 'Lviv is the best city', 'a', 'true', 'weweewe'];
// arrOutput(arrOfString);

//- створити функцію яка повертає найбільше число з масиву

function biggestOfArr(arrOfNum){
	let max=0;
	let min=0;
	for (let i=0; i<arrOfNum.length; i++) {
		if(arrOfNum[i]>max){
			max=arrOfNum[i];
		} else if (arrOfNum[i]<min){
			min=arrOfNum[i];
		}
	}
		return max;
}
// let biggestofArr=biggestOfArr(arrofSymbols)
// console.log(biggestofArr);
//- створити функцію яка повертає найменьше число з масиву
function smallestOfArr(arrOfNum){
	let max=0;
	let min=0;
	for (let i=0; i<arrOfNum.length; i++) {
		if(arrOfNum[i]>max){
			max=arrOfNum[i];
		} else if (arrOfNum[i]<min){
			min=arrOfNum[i];
		}
	}
	return min;
}
// let smallestofArr=smallestOfArr(arrofSymbols)
// console.log(smallestofArr);
//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function SumOfArr(arr){
	let sum=0;
	for (const elem of arr) {
	sum=sum+elem;
	}
	return sum;
}
// let sumArr=SumOfArr(arrofNumbers);
// console.log(sumArr);
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function AvgOfArr(arr){
	let avg=0;
	let sum=0;
	for (const elem of arr) {
		sum=sum+elem;
	}
	avg=sum/arr.length;
	return avg;
}
 // let avgArr=AvgOfArr(arrofNumbers);
 // console.log(avgArr);


//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function objSize (obj){
	return obj.length
}
// let objsize=objSize(rules);
// console.log(objsize);

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function objSizeOfFields (arrOfObj){
	let sumOfFilelds=0;
	for (const count of arrOfObj) {
		sumOfFilelds=sumOfFilelds+Object.keys (count).length;
	}
	return sumOfFilelds;
}
// let sizeFields=objSizeOfFields(rules);
// console.log(sizeFields);


//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

function SumOf2Arr(arr1, arr2){
	let arr3=[];
	for (const elem in arr1) {
		arr3[elem]=arr1[elem]+arr2[elem];
	}
	console.log(arr1);
	console.log(arr2);
	return arr3;
}
//let sum2Arr=SumOf2Arr(arrofNumbers, arrofNumbers2);
//console.log(sum2Arr);

//  Приклад
// [1,2,3,4]
//  [2,3,4,5]
//  результат
//  [3,5,7,9]



//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function objExchange (arrOfObj, i){
	let exchanger=arrOfObj[i];
	arrOfObj[i]=arrOfObj[i+1];
	arrOfObj[i+1]=exchanger;
	
	return arrOfObj;
}
// let arrofobj=objExchange(rules, 1);
// console.log(arrofobj);

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100

function arr0exchange (arrOfObj){
	for (i=0;i<arrOfObj.length; i++){
		if(arrOfObj[i]==0){
		arrOfObj.push(arrOfObj[i]);
		arrOfObj.splice(i, 1);
		
		}
		}
return arrOfObj;
}
//let res=arr0exchange(arrRand());
//console.log(res);
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]

//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
function addDiv (){
	let div=document.createElement('div');
	div.innerHTML="Hello owu";
	document.body.appendChild(div);
}
//addDiv();


//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addDivMod (elem,string){
	let div=document.createElement(elem);
	div.innerHTML=string;
	document.body.appendChild(div);
}
//addDivMod('h1',arrofSymbols);
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

function autoArr (arrauto, index){
	for (let j=0; j<arrauto.length; j++) {
		let idElement = document.createElement(index);
		let divAuto = document.createElement('div');
		divAuto.className=`auto properties ${j + 1}`;
		idElement.id = `auto ${j + 1}`;
		divAuto.innerHTML = Object.values(arrauto[j]);
		idElement.appendChild(divAuto);
		document.body.appendChild(idElement);
	}
}
   
// autoArr(arrOfAuto, 'h3');


//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок

function autoArr (arrauto, index){
	for (let j=0; j<arrauto.length; j++) {
		let idElement = document.createElement(index);
		let divAuto = document.createElement('div');
		divAuto.className=`auto ${j + 1}`;
		let divAuto1 = document.createElement('div');
		divAuto.className=`auto ${j + 1}`;
		divAuto1.className=`auto properties ${j + 1}`;
		let divAuto2 = document.createElement('div');
		divAuto2.className=`auto properties ${j + 1}`;
		idElement.id = `auto ${j + 1}`;
		divAuto1.innerHTML =arrauto[j].name;
		divAuto2.innerHTML =arrauto[j].year;
		divAuto.appendChild(divAuto1);
		divAuto.appendChild(divAuto2);
		idElement.appendChild(divAuto);
		document.body.appendChild(idElement);
	}
}

// autoArr(arrOfAuto, 'p');

//(на основі минулого ДЗ)
//**//- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.

            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false}];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'}];


//Частковий приклад реультату:
function ArrConcat (arr1, arr2){
	let arr3=[];
	for (const Key of arr1) {
        for (const Key1 of arr2) {
               if (Key.id === Key1.user_id) {
                   Key.adress = Key1;
               }

              }
        arr3.push(Key);
        }
return arr3;
}
//console.log (ArrConcat(usersWithId,citiesWithId));


//***//- беремо завдання з правилами з укроку №3 :
//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html




	let rules1 = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];


function RulesHTML (arrOfRules){
const divWrap=document.createElement("div");
divWrap.id='wrap';
for (let i=0; i<arrOfRules.length; i++) {
    let divClass=document.createElement('div')
    divClass.className=`rules rule${i+1}`;
    const h2=document.createElement('h2');
    h2.innerText=arrOfRules[i].title;
    const p=document.createElement("p");
    p.innerText=arrOfRules[i].body;
    divClass.appendChild(h2);
    divClass.appendChild(p);
    divWrap.appendChild(divClass);
}
document.body.appendChild(divWrap);
}

// RulesHTML (rules1);














//===========додаткове від віктора========
//1) Точная степень двойки.
//Дано натуральное число N.
//Выведите слово YES, если число N является точной степенью двойки,
//или слово NO в противном случае.
//Операцией возведения в степень пользоваться нельзя!

function exponent (){
	let N=prompt('Please enter natural value N:');
	if (N&(N-1)){
		console.log('NO');
	}
	else{
		console.log ('YES');
	}
}
//exponent ();


//2) Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій

//3) Flat
//Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]










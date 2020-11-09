// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let obj1={
//     name: 'obj1',
//     age: 16,
//     nationality: 'ukr'
// }
// let obj2={
//     name: 'obj2',
//     age: 17,
//     nationality: 'ukr'
// }
// let obj3={
//     name: 'obj3',
//     age: 18,
//     nationality: 'ukr'
// }
// let obj4={
//     name: 'obj4',
//     age: 19,
//     nationality: 'ukr'
// }
// let obj5={
//     name: 'obj5',
//     age: 20,
//     nationality: 'ukr'
// }
//
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//
// let Car={
//     model: 'Tesla',
//     year: 2020,
//     power: 150,
//     color: 'white'
// }
// let House={
//     name: 'Avalon',
//     levels: 10,
//     owmerShip: false
// }
// let Animal={
//     name: 'Dog',
//     age: 5,
//     color: 'white'
// }
// let City={
//     name: 'Lviv',
//     age: 692,
//     location: 'Ukraine'
// }
// let Country={
//     name: 'Ukraine',
//     age: 29,
//     location: 'Europe'
// }

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// console.log(`Keys of obj1 are following:`);
// for (const objKey in obj1) {
//     console.log(`${objKey}`);
// }
// console.log(`Keys of obj2 are following:`);
// for (const objKey in obj2) {
//     console.log(`${objKey}`);
// }
// console.log(`Keys of obj3 are following:`);
// for (const objKey in obj3) {
//     console.log(`${objKey}`);
// }
// console.log(`Keys of obj4 are following:`);
// for (const objKey in obj4) {
//     console.log(`${objKey}`);
// }
// console.log(`Keys of obj5 are following:`);
// for (const objKey in obj5) {
//     console.log(`${objKey}`);
// }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(Car));
// console.log(Object.keys(House));
// console.log(Object.keys(Animal));
// console.log(Object.keys(City));
// console.log(Object.keys(Country));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
//
// let arrOfCars=[Car={
//     model: 'Tesla',
//     year: 2020,
//     power: 150,
//     color: 'white'
// },  Car1={
//     model: 'Tesla',
//     year: 2019,
//     power: 150,
//     color: 'white'
// },  Car2={
//     model: 'Tesla',
//     year: 2018,
//     power: 150,
//     color: 'white'
// },  Car3={
//     model: 'Tesla',
//     year: 2017,
//     power: 150,
//     color: 'white'
// },  Car4={
//     model: 'Tesla',
//     year: 2016,
//     power: 150,
//     color: 'white'
// },  Car5={
//     model: 'Tesla',
//     year: 2015,
//     power: 150,
//     color: 'white'
// },  Car6={
//     model: 'Tesla',
//     year: 2014,
//     power: 150,
//     color: 'white'
// },  Car7={
//     model: 'Tesla',
//     year: 2013,
//     power: 150,
//     color: 'white'
// },  Car8={
//     model: 'Tesla',
//     year: 2012,
//     power: 150,
//     color: 'white'
// }, Car9={
//     model: 'Tesla',
//     year: 2011,
//     power: 150,
//     color: 'white'
// }]
//
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let arrOfCities=[city={name: 'Lviv', population: 900000, country:'Ukraine', region:'Lvivska oblast'},
//     city2={name: 'Horodok', population: 20000, country:'Ukraine', region:'Lvivska oblast'},
//     city3={name: 'Drohobych', population: 90000, country:'Ukraine', region:'Lvivska oblast'}];

// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
/*let arrOfCars2=[car1={model:'Tesla',year: 2016,power: 150, color: 'white', driver:{name:'Roman', age:30, sex: 'm', experience: 12}},
    car2={model:'Tesla',year: 2016,power: 150, color: 'white', driver:{name:'Misha', age:30, sex: 'm', experience: 10}},
    car3={model:'Tesla',year: 2016,power: 150, color: 'white', driver:{name:'Vova', age:25, sex: 'm', experience: 5}}]*/

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i=0;
// while (i < arrOfCars.length){
//     console.log(arrOfCars[i]);
//     i++;
// }
// while (i < arrOfCities.length){
//     console.log(arrOfCities[i]);
//     i++;
// }
//
// while (i < arrOfCars2.length){
//     console.log(arrOfCars2[i]);
//     i++;
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i <arrOfCities.length ; i++) {
//  console.log(arrOfCities[i])
// }
// for (let i = 0; i <arrOfCars.length ; i++) {
//     console.log(arrOfCars[i])
// }
// for (let i = 0; i <arrOfCars2.length ; i++) {
//     console.log(arrOfCars2[i])
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const element of arrOfCars) {
//     console.log(element);
// }
// for (const element of arrOfCars2) {
//     console.log(element);
// }
// for (const element of arrOfCities) {
//     console.log(element);
//
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let str1=JSON.stringify(obj1);
// console.log(str1);
// let str2=JSON.stringify(obj2);
// console.log(str2);
// let str3=JSON.stringify(obj3);
// console.log(str3);
// let str4=JSON.stringify(obj4);
// console.log(str4);
// let str5=JSON.stringify(obj5);
// console.log(str5);

// - взять json из задания 11 и превратить их обратно в объекты.
// let str6=JSON.parse(str1);
// console.log(str6);
// let str7=JSON.parse(str2);
// console.log(str7);
// let str8=JSON.parse(str3);
// console.log(str8);
// let str9=JSON.parse(str4);
// console.log(str9);
// let str10=JSON.parse(str5);
// console.log(str10);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let jsonOfArr;
// for (const arrOfCar of arrOfCars) {
//     jsonOfArr=JSON.stringify(arrOfCars);
//     }
// console.log(jsonOfArr);
// let objOfJson=JSON.parse(jsonOfArr);
// console.log(objOfJson);

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let jsonOfArr;
// let i=0;
// for (const element of arrOfCities) {
//     jsonOfArr = JSON.stringify(arrOfCities);
// }
// console.log(jsonOfArr);
//  let objOfJson=JSON.parse(jsonOfArr);
//  console.log(objOfJson);
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let jsonOfArr=[];
// let i=0;
// for (const element of arrOfCars2) {
//     jsonOfArr = JSON.stringify(arrOfCars2);
// }
// console.log(jsonOfArr);
// let objOfJson=JSON.parse(jsonOfArr);
// console.log(objOfJson);
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let ArrOfUsers=[user1={name:'Vova', age: 20, skills: ['Junior', 'html', 'CSS']},
// user2={name: 'Roman', age:28, skills: ['Senior', true, 'C++','Python', 'PHP']},
// user3={name: 'Ira', age: 20, skills:[ 'Trainee', 'JS', 'Java', 'Python']}];
// for (const element of ArrOfUsers) {
//     console.log(element)
//     console.log(element.skills)
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//
// let ArrOfEmpty=[];
// let i=0;
// let ArrOfUsers=[user1={name:'Vova', age: 20, skills: ['Junior', 'html', 'CSS']},
//     user2={name: 'Roman', age:28, skills: ['Senior', true, 'C++','Python', 'PHP']},
//     user3={name: 'Ira', age: 20, skills:[ 'Trainee', 'JS', 'Java', 'Python']}];
// for (const element of ArrOfUsers) {
//     console.log(element)
//     console.log(element.skills)
//     ArrOfEmpty[i]=element.skills;
//     i++;
// }
// console.log(ArrOfEmpty);


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j <users[i].skills.length; j++) {
//         console.log(users[i].skills[j]);
//     }
//
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let ArrOfEmpty=[];
//
// for (let i=0; i<users.length; i++) {
//     console.log(users[i].name)
//     ArrOfEmpty[i]=users[i].name;
//     }
// console.log(ArrOfEmpty);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i = 0; i < users.length; i++) {
//     let div=document.createElement('div');
//     div.innerText=`name:${users[i].name} age:${users[i].age} status:${users[i].status} skills:${users[i].skills}`;
//     document.body.appendChild(div);
// }
// for (element of users) {
//     let div=document.createElement('div');
//     div.innerText=`name:${element.name} age:${element.age} status:${element.status} skills:${element.skills}`;
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const element of users) {
//     let ExternalDiv=document.createElement('div');
//     for (const user in element) {
//         let InternalDiv=document.createElement('div');
//         InternalDiv.innerText=`${element[user]}`;
//         InternalDiv.classList.add(user);
//         ExternalDiv.appendChild(InternalDiv);
//     }
//
//     document.body.appendChild(ExternalDiv);
//          }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// for (const element of users) {
//     let ExternalDiv=document.createElement('div');
//         for (const user in element) {
//             let InternalDiv=document.createElement('div');
//             InternalDiv.innerText=`${element[user]}`;
//             InternalDiv.classList.add(user);
//             ExternalDiv.appendChild(InternalDiv);
//         }
//     document.body.appendChild(ExternalDiv);
//
// }





// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let userWithCities=[];
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// for (const Key of usersWithId) {
//         for (const Key1 of citiesWithId) {
//                if (Key.id === Key1.user_id) {
//                    Key.adress = Key1;
//                                  }
//
//               }
//         userWithCities.push(Key);
//         }
// console.log(userWithCities);
//

//     Записати цей об'єкт в новий масив



// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
/* let divIdClass=document.createElement('div');
 divIdClass.id='divId';
 divIdClass.className='divClass';
 divIdClass.innerHTML="I am Roman. I am 30 years old";
 document.body.appendChild(divIdClass);
let id=document.getElementById('divId');
console.log(id.innerText);
let clas=document.getElementsByClassName('divClass');
console.log(clas[0].innerText);
let tag=document.getElementsByTagName('div');
console.log(tag[10].innerText);*/


// // - змінити цей текст використовуючи селектори id, class,  tag
//id.innerHTML="I am living in Lviv";
//id.style.backgroundColor="red";
//clas[0].innerHTML='Lviv is open city for the world';
//tag[10].innerHTML=`${id.innerText} AND it is my favorite city`;
//for (i=0; i<id)


// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//id.style.width='550px';
//id.style.height='50px';
//clas[length].style.width='1000px';
//clas[length].style.height='100px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
/*let tablebody=document.createElement('table');
tablerows.style.border="solid 3px red";
tablebody.style.width='100%';
tablerows=document.createElement("tr");
tablecolumn=document.createElement("td");
tablecolumn.innerText='lorem1';
tablecolumn.style.border="solid 3px red";
tablerows.appendChild(tablecolumn);
tablecolumn=document.createElement("td");
tablecolumn.innerText='lorem2';
tablecolumn.style.border="solid 3px red";
tablerows.appendChild(tablecolumn);
tablecolumn=document.createElement("td");
tablecolumn.innerText='lorem3';
tablecolumn.style.border="solid 3px red";
tablerows.appendChild(tablecolumn);
tablebody.appendChild(tablerows);
document.body.appendChild(tablebody);*/
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let mytable=document.createElement('table');
// mytable.style.border='solid 2px blue';
// let mycolumns;
// let myrows;
// for (let i = 0; i <10 ; i++) {
// 	 myrows=document.createElement("tr");
// 	 mytable.appendChild(myrows);
// 	 for (let j=0; j<3; j++){
// 	 mycolumns=document.createElement("td");
// 	 mycolumns.innerText='Element '+(j);
// 	 mycolumns.style.border='solid 2px blue';
// 	 myrows.appendChild(mycolumns);
// 	 }

// }
// document.body.appendChild(mytable);
 
 
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

let mytable=document.createElement('table');
mytable.style.border='solid 2px blue';
let mycolumns;
let myrows;
for (let i = 0; i <10 ; i++) {
	 myrows=document.createElement("tr");
	 mytable.appendChild(myrows);
	 for (let j=0; j<5; j++){
	 mycolumns=document.createElement("td");
	 mycolumns.innerText='Element '+(j);
	 mycolumns.style.border='solid 2px blue';
	 myrows.appendChild(mycolumns);
	 }

}
document.body.appendChild(mytable);


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний
//
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

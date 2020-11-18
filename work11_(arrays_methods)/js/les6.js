//  создать массив с 20 числами.
let arrOfNum=[1,-45,3,456,2,0,-9,34,9.6,-0.78,4,69,190,45,67,52,35,6,89,490];
// -- при помощи метода sort и колбека  отсортировать массив.
// let Up= arrOfNum.sort((a, b) => {return a-b});
// console.log(Up);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let Down=arrOfNum.sort((a, b) => {return b-a});
// console.log(Down);
// -- при помощи filter получить числа кратные 3
// console.log(arrOfNum.filter(value => value%3==0 ));
// -- при помощи filter получить числа кратные 10
// console.log(arrOfNum.filter(value => value%10==0));
// -- перебрать (проитерировать) массив при помощи foreach()
// arrOfNum.forEach(value => console.log(value));
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let map= arrOfNum.map((value, index)  => {
      return Math.round(value*3);
});
// console.log(map);

//
// - создать массив со словами на 15-20 элементов.
let arrOfString=['Roman','12','Nadiia','Ukraine','Lviv', 'Mazda','1', 'VW', 'true', 'false','Boolean', 'right', 'left', 'center', 'Poland',
'Europe', 'USA', 'IT', 'Jun', 'payment is very high'];
// -- отсортировать его по алфавиту в восходящем порядке.
let sortedUPstring=JSON.parse(JSON.stringify(arrOfString));
sortedUPstring.sort(function (a,b){return a.toLowerCase()>b.toLocaleLowerCase() });
// console.log(arrOfString);
// console.log(SortedUPstring);
// let SortedUPstring = arrOfString.sort((a,b)=>{return a>b });
// console.log(SortedUPstring);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortedDOWNstring = arrOfString.sort((a,b)=>{return a<b });
// console.log(SortedDOWNstring);

// -- отфильтровать слова длиной менее 4х символов
let filteredString=arrOfString.filter(a=> {
    if (a.length<4) return a;})
// console.log(filteredString);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapedString=arrOfString.map((value) => {return  (value=value+'!');})
// console.log(mapedString);
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let SortedObj=users.sort((a,b)=>a.age-b.age);
// console.log(SortedObj);
//
// let SortedObj1=users.sort((a,b)=>b.age-a.age);
// console.log(SortedObj1);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let SortedbyName= users.sort((value1, value2) => value1.name.length-value2.name.length)
// console.log(SortedbyName);
// let SortedbyName1= users.sort((value1, value2) => value2.name.length-value1.name.length)
// console.log(SortedbyName1);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let AddedId=JSON.parse(JSON.stringify(users));
AddedId.map((value,index) => {
    value.id=Math.floor(Math.random()*100*index);
    return value;
});
// console.log(users)
// console.log(AddedId);
// - відсортувати його за індентифікатором
//
AddedId.sort((a,b)=>a.id-b.id);
// console.log(AddedId);
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator2(a, b, callback) {
//     return callback();
// }
//     let result= calculator2(1,2,(a,b)=> {
//         a=+(prompt('Enter 1.value:'));
//         b=+(prompt('Enter 2.value:'));
//         c=prompt('Enter operation');
//         if(c=="+"){
//             return a+b;
//         }
//         else if(c=='-'){
//             return a-b;
//         }
//         else if(c=='*') {
//             return a * b;
//         }
//         else if(c=='/'){
//             return a/b;
//         }
//
//     });
// alert(`Result is ${result}`);
// -- наисать функцию калькулятора с 3мя числами и колбеком


// function calculator3(aa, bb, cc, callback) {
//     return callback(aa, bb,cc);
// }
// let result1= calculator3(1,2,3,(aa,bb,cc)=> {
//     aa=+(prompt('Enter 1.value:'));
//     bb=+(prompt('Enter 2.value:'));
//     cc=+(prompt('Enter 3.value:'));
//     dd=prompt('Enter operation');
//     if(dd=="+"){
//         return aa+bb+cc;
//     }
//     else if(dd=='-'){
//         return aa-bb-cc;
//     }
//     else if(dd=='*') {
//         return aa * bb *cc;
//     }
//     else if(dd=='/'){
//         return aa/bb/cc;
//     }
//
// })
// alert(`Result is ${result1}`)


//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [ {producer:"subaru",
    model: "wrx",
    year: 2010,
    color:"blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400},
    {producer:"subaru",
        model: "legacy",
        year: 2007,
        color:"silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250},
    {producer:"subaru",
        model: "tribeca",
        year: 2011,
        color:"white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300},
    {producer:"subaru",
        model: "leone",
        year: 1998,
        color:"yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140},
    {producer:"subaru",
        model: "impreza",
        year: 2014,
        color:"red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200},
    {producer:"subaru",
        model: "outback",
        year: 2014,
        color:"red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165},
    {producer:"bmw",
        model: "115",
        year: 2013,
        color:"red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120},
    {producer:"bmw",
        model: "315",
        year: 2010,
        color:"white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120},
    {producer:"bmw",
        model: "650",
        year: 2009,
        color:"black",
        type: "coupe",
        ngine: "f60",
        volume: 6,
        power: 350},
    {producer:"bmw",
        model: "320",
        year: 2012,
        color:"red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180},
    {producer:"mercedes",
        model: "e200",
        year: 1990,
        color:"silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,power: 180},
    {producer:"mercedes",
        model: "e63",
        year: 2017,
        color:"yellow",
        type: "sedan",
        engine: "amg63",
        volume:3,
        power: 400},
    {producer:"mercedes",
        model: "c250",
        year: 2017,
        color:"red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let res=cars.filter(value => value.volume >= 3);
// console.log(res);
// - двигун = 2л
let res1=cars.filter(value => value.volume == 2);
// console.log(res1);
// - виробник мерс
let res2=cars.filter(value => value.producer === 'mercedes');
// console.log(res2);
// - двигун більше 3х літрів + виробник мерседес
let res3=cars.filter(value => value.volume>=3 && value.producer === 'mercedes');
// console.log(res3);
// - двигун більше 3х літрів + виробник субару
let res4=cars.filter(value => value.volume>=3 && value.producer === 'subaru');
// console.log(res4);
// - сили більше ніж 300
let res5=cars.filter(value => value.power>=300 );
// console.log(res5);
// - сили більше ніж 300 + виробник субару
let res6=cars.filter(value => value.power>=300 && value.producer === 'subaru');
// console.log(res6);
// - мотор серіі ej
// let res7=cars.filter(value => value.engine.startsWith('ej'));
// console.log(res7);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let res8=cars.filter(value => value.power > 300 && value.producer==='subaru');
// console.log(res8);
// - двигун меньше 3х літрів + виробник мерседес
let res10=cars.filter(value => value.volume<3 && value.producer === 'mercedes');
// console.log(res10);
// - двигун більше 2л + сили більше 250
let res11=cars.filter(value => value.volume>2 && value.power === 250);
// console.log(res11);
// - сили більше 250  + виробник бмв
let res12=cars.filter(value => value.power>250 && value.producer === 'bmw');
// console.log(res12);
//




//
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

let Second=JSON.parse(JSON.stringify(usersWithAddress));
// -- отсортировать его по id пользователей
// Second.sort((a,b)=>{a.id-b.id})
// console.log(usersWithAddress);
// console.log(Second);

// -- отсортировать его по id пользователей в обратном опрядке
// Second.sort((a,b)=>{ return b.id-a.id})
// console.log(Second);

// -- отсортировать его по возрасту пользователей
// Second.sort((a,b)=>{ return a.age-b.age})
// console.log(Second);

// -- отсортировать его по возрасту пользователей в обратном порядке

// Second.sort((a,b)=> b.age-a.age})
// console.log(Second);

// -- отсортировать его по имени пользователей
// Second.sort((a,b)=>  a.name > b.name );
// console.log(Second);

// -- отсортировать его по имени пользователей в обратном порядке

// let nameDown=Second.sort((a,b)=> a.name < b.name)
// console.log(nameDown);


// -- отсортировать его по названию улицы  в алфавитном порядке
// let name=Second.sort((a,b)=>{ return (a.address.street > b.address.street)})
// console.log(name);

// -- отсортировать его по номеру дома по возрастанию

// let number=Second.sort((a,b)=>{ return (a.address.number - b.address.number)})
// console.log(number);
// -- отфильтровать (оставить) тех кто младше 30
// let res13=Second.filter((value)=>{ return value.age<30})
// console.log(res13);
// -- отфильтровать (оставить) тех у кого отрицательный статус
// let res14=Second.filter((value)=> value.status ==false)
// console.log(res14);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let res15=Second.filter((value)=> value.status ==false && value.age<30)
// console.log(res15);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let res15=Second.filter((value)=>!(value.address.number%2) )
//  console.log(res15);
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

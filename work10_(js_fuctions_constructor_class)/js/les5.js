//
//
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
// function TagCreator(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag || 'No Title';
//     this.action = action || 'No Action';
//     this.attrs = attrs || 'No Attributes';
// }

// let title = '<p>';
//     let action= "Определяет текстовый абзац. Тег  является блочным элементом, всегда начинается с новой строки, " +
//     "абзацы текста идущие друг за другом разделяются между собой отбивкой.";
//     let attr=[
//         {name:'align',description:'Определяет выравнивание текста.'},
//         {name:'class',description:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//         {name:'download',descrption:'Предлагает скачать указанний файл'}];
// let div = new TagCreator('<div>');
// let p= new TagCreator (title, action, attr);
//
// console.log(p);
// console.log(div);





//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
class TagCreator {
    constructor(titleOfTag,action,attrs) {
        this.titleOfTag = titleOfTag || 'No Title';
        this.action = action || 'No Action';
        this.attrs = attrs || 'No Attributes';
    }
}

let title = '<p>';
let action= "Определяет текстовый абзац. Тег  является блочным элементом, всегда начинается с новой строки, " +
    "абзацы текста идущие друг за другом разделяются между собой отбивкой.";
let attr=[
    {name:'align',description:'Определяет выравнивание текста.'},
    {name:'class',description:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
    {name:'download',descrption:'Предлагает скачать указанний файл'}];
// let div = new TagCreator('<div>');
// let p= new TagCreator (title, action, attr);

// console.log(p);
// console.log(div);


//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
let Car = {
    model:'tesla s',
    manufacter: 'TESLA',
    year:2020,
    maxspeed: 300,
    enginecapacity: 3.0,
    drive: () => { console.log(`їдемо зі швидкістю ${Car.maxspeed} км на годину`);},
    info: () => {for(key in Car){
        console.log(`${key}  ${Car[key]}`)};},
    increaseMaxSpeed: (newSpeed) =>{ Car.maxspeed=newSpeed;},
    changeYear: (newValue) => {Car.year=newValue;},
    addDriver: (driver) => {Car.driver=driver},
}

// Car.addDriver({name:'Roman', age:30, experience: 10});
//console.log(Car);
// console.log(Car.changeYear(1986));
// console.log(Car.increaseMaxSpeed(450));
// Car.info();
// Car.drive();

//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


function Car1(model,manufacter,year, maxspeed, enginecapacity) {
    this.model=model;
    this.manufacter=manufacter;
    this.year=year;
    this.maxspeed=maxspeed;
    this.enginecapacity= 3.0;
    this.drive= () => { console.log(`їдемо зі швидкістю ${maxspeed} на годину`)};
    this.info= () => {for(key in Car){
        console.log(`${key}  ${Car[key]}`)} };
    this.increaseMaxSpeed= (newSpeed) =>{ Car.maxspeed=newSpeed;};
    this.changeYear= (newValue) => {Car.year=newValue;};
    this.addDriver= (driver) => {Car.driver=driver};
}

// console.log(Golf= new Car1("Golf 8","VW",2010,250,3.55));




// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class Car2 {
    constructor(model,manufacter,year, maxspeed, enginecapacity) {
        this.model = model;
        this.manufacter = manufacter;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginecapacity = enginecapacity;
    }
    drive= () => { console.log(`їдемо зі швидкістю ${maxspeed} на годину`)};
    info= () => {for(key in Car){
        console.log(`${key}  ${Car[key]}`)} };
    increaseMaxSpeed= (newSpeed) =>{ Car.maxspeed=newSpeed;};
    changeYear= (newValue) => {Car.year=newValue;};
    addDriver= (driver) => {Car.driver=driver};
}

console.log(Passat= new Car2('B8',"VW",2019,320,2.8));
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

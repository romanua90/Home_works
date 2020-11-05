// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// let Dog= {
//     name: 'Vudik',
//     type: 'Shpitz',
//     color: 'brown',
//     height: 30,
//     weight: 3
// }
// console.log(Dog);
//
// // - людину
// let Man ={
//     FirstName: 'Roman',
//     LastName: 'Stashchak',
//     SecondName: 'Volodymyrovych',
//     Age: 30,
//     hasWife: true,
//     hasWork: true,
//     height: 180,
//     }
// // - автомобіль
//
// let Car={
//     name: 'Volkswagen',
//     power: 1.3,
//     typeOfFuel: 'benzin/LPG',
//     year: 1986,
//     color: 'white',
//     mileage: 300000
// }
// // - квартиру
// let Apartment={
//     name: 'Avalon',
//     address: 'Lviv',
//     square: 50,
//     floor: 4,
//     QuantityOfRoom: 2,
//     IsOwner: false
// }
// // - книгу
// let Book={
//     name: 'Bible',
//     color: 'black',
//     QuantityOfPages: 310,
//     Autor: "GOD",
//     Year: 2016
// }
//
//
// // -- Створити масив та вивести його в консоль:
// //     - з 5 собак
// let arrOfDogs=['buldog', 'labrador','chihuahua', 'shpitz','vivcharka'];
// console.log(arrOfDogs);
// // - 3 5 людей
// let arrOfPeople=['Ivan', 'Olga','Roman', 'Viktor','Anatoliy'];
// console.log(arrOfPeople);
// // - з 5 автомобілів
// let arrOfCars=['VW', 'Ford','Mercedes', 'Citroen','Tesla'];
// console.log(arrOfCars);
// //
// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//
// // - будинок
// let House={
//     heigt: 20,
//     level: 3,
//     roomsSquare: {
//         bedroom: 15,
//         kitchen: 17,
//         hallway: 8,
//         children_room: 18,
//         bathroom: 6
//         },
//     isMyOwnership: true,
//     whoHereLives: ['father', 'mother', 'son', 'daughter', 'cat', 'dog']
//     }
// // - водій
// let Driver={
//     name: 'Andriy',
//     age: 35,
//     category: ['B', 'C', 'C1', 'D'],
//     experience: 15,
//     MyCars:{
//         lanos: "2009-2010",
//         vw_golf8: '2011-2015',
//         tesla: '2016-2020'
//     }
// }
// console.log (Driver);
//
// // Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log (users[7].name+" status is "+users[7].status);
// // - статус Максима
// console.log (users[4].name+" status is "+users[4].status);
// // - ім'я передостаннього об'єкту
// console.log (users[users.length-2].name);
// // - ім'я третього об'єкта
// console.log (users[2].name);
// // - вік Олега
// console.log(`Age of ${users[6].name} is `, users[6].age)
// // - вік Олі
// console.log(`Age of ${users[3].name} is `, users[3].age)
// console.log(`Age of ${users[9].name} is `, users[9].age)
// // - вік + ім'я 5го об'єкта
// console.log(`Age of ${users[4].name} is `, users[4].age)
// // - вік + сатус Анни
// console.log(`Age of ${users[5].name} is `, users[5].age + ' and status is '+users[5].status)
// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!



/
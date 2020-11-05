// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let ArrOfNumb=[-4.56,3,123,90,43123];
// let ArrOfStr=['Roman',"hello", "world", "JavaScript is the best programming language", "arr-!*_"];
// let ArrOfSymbols=["true", 'false', 3.14, -900, 'Lviv'];
//
// console.log (ArrOfNumb, ArrOfStr, ArrOfSymbols);
//
// let EmptyArr =[];
// let counter=prompt('Please enter length of array');
// for (let i = 0; i < counter; i++) {
//     EmptyArr[i]=prompt("Please enter any symbol");
// }
// console.log(EmptyArr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <10; i++) {
//     document.write("<div>Text</div>")
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <10; i++) {
//     document.write(`<div>Text ${i+1}</div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i <20) {
//     document.write("<h1>Header </h1>");
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i <20) {
//     document.write(`<h1>Header ${i+1}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let ArrOfNumb=[-4.56,3,123,90,43123, 34, 42, 0, 4,-9];
// for (let i = 0; i < ArrOfNumb.length ; i++) {
// console.log(ArrOfNumb[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let ArrOfStr=['Roman',"hello", "world", "JavaScript is the best programming language", "arr-!*_",'Roman',"hello", "world", "JavaScript is the best programming language", "arr-!*_"];
// for (let i = 0; i < ArrOfStr.length ; i++) {
//     console.log(ArrOfStr[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let ArrOfSymbols=["true", 'false', 3.14, -900, '[Lviv]',"true", 'false', 3.14, -900, 'Lviv]'];
// for (let i = 0; i < ArrOfSymbols.length ; i++) {
//     console.log(ArrOfSymbols[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let ArrOfSymbols=["true", false, 3.14, -900, '[Lviv]', true, false, 3.14, -900, 'Lviv]'];
// for (let i = 0; i < ArrOfSymbols.length ; i++) {
//     if (typeof(ArrOfSymbols[i]) === 'boolean') {
//         console.log(ArrOfSymbols[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let ArrOfSymbols=["true", false, 3.14, -900, '[Lviv]', true, false, 3.14, -900, 'Lviv]'];
// for (let i = 0; i < ArrOfSymbols.length ; i++) {
//     if (typeof(ArrOfSymbols[i]) === 'number') {
//         console.log(ArrOfSymbols[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let ArrOfSymbols=["true", false, 3.14, -900, '[Lviv]', true, false, 3.14, -900, 'Lviv]'];
// for (let i = 0; i < ArrOfSymbols.length ; i++) {
//     if (typeof(ArrOfSymbols[i]) === 'string') {
//         console.log(ArrOfSymbols[i]);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let EmptyArr =[];
// let counter=prompt('Please enter length of array');
// for (let i = 0; i < counter; i++) {
//     EmptyArr[i]=prompt("Please enter any symbol");
// }
// console.log(EmptyArr);
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <10 ; i++) {
//     console.log("Step-",i);
//     document.write("Step-",i+"<br>");
//
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <100 ; i++) {
//     console.log("Step-",i);
//     document.write("Step-",i+"<br>");
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <100; i+=2) {
//     console.log("Step-",i);
//     document.write("Step-",i+"<br>");
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <100; i++) {
//     if(i%2==0) {
//         console.log("Step-", i);
//         document.write("Step-", i + "<br>");
//     }
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <100; i+=2) {
//       console.log("Step-", i);
//         document.write("Step-", i + "<br>");
//
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i <100; i++) {
//     if(i%2==1) {
//         console.log("Step-", i);
//         document.write("Step-", i + "<br>");
//     }
//
// }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i <2 ; i++) {
//     console.log(`Time is: ${i} min`);
//     for (let j = 0; j <60; j++) {
//         console.log(` ${j} sec`);
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 0; h <2; h++) {
//     console.log(`Time is: ${h} hour(s)`);
//     document.write(`<h1>Time is: ${h} hour(s)</h1>`);
//     for (let i = 0; i < 20; i++) {
//         console.log(` ${i} min`);
//         document.write(`<h2> ${i} min</h2>`);
//         for (let j = 0; j < 60; j++) {
//             console.log(` ${j} sec`);
//             document.write(`<h3> ${j} sec</h3>`);
//         }
//     }
// }
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];
// for (let i = 0; i <3 ; i++) {
//     arr.push(i+1);
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1, 2, 3];
// console.log(arr.reverse());
// let buf;
// for (let i = 0; i <arr.length ; i++) {
//     if(arr[i]<arr[i+1]&& arr[i]<arr[i+2]){
//         buf=arr[i+2];
//         arr[i+2]=arr[i];
//         arr[i]=buf;
//     }
//         if(arr[i]>arr[i]&& arr[i]>arr[i+2]){
// }

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4,5,6);
// console.log(arr);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6
// let arr = [1, 2, 3];
// arr.unshift(4,5,6);
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//     let arr = ['js', 'css', 'jq'];
//     console.log(arr.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3,5));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].//

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0,2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
//     arr.splice(3,2,'a', 'b','c', 4, 5);
//     console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr = [1, 2, 3, 4, 5];
    arr.splice(1,4,2, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
        console.log(arr);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.




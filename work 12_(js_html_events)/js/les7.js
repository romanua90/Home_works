//
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let id= document.createElement('textarea');
// id.id='text';
// id.style.display='block';
// let btn= document.createElement('input');
// btn.type='submit';
// btn.style.display='flex';
// document.body.appendChild(id);
// document.body.appendChild(btn);
//
// btn.onclick= ev => {
//     if (id.style.display==='block') {
//             id.style.display = 'none'
//     }
//     else {
//         id.style.display = 'block'
//     }
//     }
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button= document.createElement('button');
// button.style.height='minheight';
// button.style.width='minwidth';
// button.style.backgroundColor='red';
// button.innerText="BUTTON";
// document.body.appendChild(button);
// console.log(document.body.childNodes);
// button.onclick= function color () {
//     button.style.display = 'none';
// }

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input1=document.createElement('input');
// let submit=document.createElement('input');
// let reset=document.createElement('input');
// let p=document.createElement('p');
//
// p.innerText='Please enter your age:';
// input1.type="number";
// input1.style.display='flex';
// submit.type='submit';
// submit.value='Read your input';
// reset.type='reset';
// reset.value='Reset';
// document.body.appendChild(p);
// document.body.appendChild(input1);
// document.body.appendChild(submit);
// document.body.appendChild(reset);
//
// submit.onclick= ()=> {
//     if (input1.value) {
//         if (input1.value < 18 && input1.value>0) {
//             alert('You are too young!!! Please go home!')
//         } else if (input1.value >= 18){
//             alert('Your are adult! Welcome!');
//         }
//     }
//     else {
//         alert('No input or value is not age!!!');
//     }
// }
// reset.onclick= ()=> {
//         input1.value='';
//     }








// - Создайте меню, которое раскрывается/сворачивается при клике

// let form=document.forms.test;
// form.style.display='block';
// let hideBtn=document.querySelectorAll('#hide input')
// console.log(hideBtn)
// hideBtn[0].onclick= ev=>{
//
//     if(form.style.display==="block"){
//         form.style.display='none';
//     }
//     else{
//         form.style.display='block';
//     }
// }

//
// const menu =document.getElementById('a1');
// const submenu= document.getElementById('submenu');
// let flag = false;
// menu.onclick=ev => {
//     if(flag){
//         submenu.style.display='block';
//         flag=false;
//     }
//     else{
//         submenu.style.display='none';
//         flag=true;
//     }
// }
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comment=[
{title : 'Comment1', body:'lorem ipsum dolo s21321it ameti2121'},
{title : 'Comment2', body:'lorem ipsum dolo sit a3123meti'},
{title : 'Comment3', body:'lorem ipsum dolo sit am345325eti'},
{title : 'Comment4', body:'lorem ipsum dolo sit amwefdsfdseti'},
{title : 'Comment5', body:'lorem ipfwdsfewrrewsum dolo sit ameti'},
{title : 'Comment6', body:'lorem ipsum dolo sitwerwer ameti'},
];
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let content=document.createElement('content');
// comment.forEach(value => {
//     const div=document.createElement('div');
//     const p=document.createElement('p');
//     const h3=document.createElement('h3');
//     const button=document.createElement('button');
//     p.innerText=value.body;
//     p.style.display='block';
//     h3.innerText=value.title;
//     div.className='comment';
//     button.innerText='Hide';
//     button.style.marginLeft='10px';
//         button.onclick=ev=> {
//         if (p.style.display=='block') {
//             p.style.display='none';
//         } else {
//             p.style.display='block';
//         }
//     }
//
//     h3.appendChild(button);
//     div.appendChild(h3);
//     div.appendChild(p);
//     content.appendChild(div);
//     document.body.appendChild(content);
//     })






//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// btn=document.getElementById('but');
// btn.onclick= ()=> {
//     let f1=document.forms
//     for (const f1Key in f1) {
//         console.log( f1[f1Key]);
//
//     }
// }
// btn1=document.getElementById('but1');
//
// btn1.onclick=()=>{
//     let ff2=document.forms;
//     ff2.form1.text.setAttribute('type', 'radio');
//     ff2.form1.text.setAttribute('name', 'rad');
//     ff2.form1.text.setAttribute('value', 'YES');
//
//     ff2.form1.text1.setAttribute('type', 'radio');
//     ff2.form1.text1.setAttribute('name', 'rad');
//     ff2.form1.text1.setAttribute('value', 'NO');
//
//     ff2.form1.text1.setAttribute('type', 'radio','name', 'rad')
//     ff2.form2.text2.setAttribute('type', 'checkbox','name', 'check')
//     ff2.form2.submit.setAttribute('type','date')
//
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// function table(r,c,el) {
//     let element = document.createElement(`${el}`);
//     element.id='content';
//     let mytable = document.createElement('table');
//     mytable.style.border = 'solid 2px black';
//     let mycolumns;
//     let myrows;
//     for (let i = 0; i < r; i++) {
//         myrows = document.createElement("tr");
//                 for (let j = 0; j < c; j++) {
//             mycolumns = document.createElement("td");
//             mycolumns.innerText = `Element ${(j+1)}`;
//             mycolumns.style.border = 'solid 1px black';
//             myrows.appendChild(mycolumns);
//
//         }
//         mytable.appendChild(myrows);
//         element.appendChild(mytable);
//         document.body.appendChild(element);
//     }
//
// }
// let btn2=document.getElementById('but2');
// btn2.onclick=()=> {
//     let r= prompt('Введіть кількість рядків:')
//     let c= prompt('Введіть кількість cтовпців:')
//     let el=prompt('Введіть елемент в який вставити таблицю:')
//     table(r,c,el);
// };
//


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// function table(r,c,el,con) {
//     let element = document.createElement(`${el}`);
//     element.id='content';
//     let mytable = document.createElement('table');
//     mytable.style.border = 'solid 2px black';
//     let mycolumns;
//     let myrows;
//     for (let i = 0; i < r; i++) {
//         myrows = document.createElement("tr");
//         for (let j = 0; j < c; j++) {
//             mycolumns = document.createElement("td");
//             mycolumns.innerText = `${con}`;
//             mycolumns.style.border = 'solid 1px black';
//             myrows.appendChild(mycolumns);
//
//         }
//         mytable.appendChild(myrows);
//         element.appendChild(mytable);
//         document.body.appendChild(element);
//     }
//
// }
// let btn2=document.getElementById('but2');
// btn2.onclick=()=> {
// let myform=document.forms.form3;
// r=form3.text3.value;
// c=form3.text4.value;
// con=form3.text5.value;
//  r,c,con
//   ?  table(r,c,'div',con)
//  :  alert('Будь ласка задайте спочатку параметри таблиці!!!')
// };



//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

   const btnDown=document.getElementById('down');
   const btnUp=document.getElementById('up');
   let i=0;
   btnUp.onclick=()=>{

       const image=document.getElementsByTagName('img');
            if(i<image.length-1) {
                image[i + 1].style.display = 'block';
                image[i].style.display = 'none';
                i++;
            }

   }
btnDown.onclick=()=>{
    const image=document.getElementsByTagName('img');
     if(i<image.length&& i>0)
    {
        image[i-1].style.display='block';
        image[i].style.display='none';
        i--;
    }

}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//

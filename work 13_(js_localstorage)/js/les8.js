// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//

// const text1=document.createElement("textarea");
// text1.id='area';
// text1.value=localStorage.getItem('text')
// document.forms.test.appendChild(text1);
// text1.oninput=(ev1)=> localStorage.setItem('text', ev1.target.value);

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает return  localStorage.getItem('text');return  localStorage.getItem('text');страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// const form1=document.forms.test;
// getData(form1);
// function saveform(t){
//     setData(t);
//        }
//
// function setData(tag){
//     for (let i = 0; i <tag.length ; i++) {
//         const tagElement= tag[i];
//         if(tagElement.type==='checkbox' || tagElement.type==='radio')
//             tagElement.checked
//         ? tagElement.value=true
//                 : tagElement.value=false
//
//         localStorage.setItem(tagElement.id,tagElement.value)
//     }
// }
// function getData(tag) {
//     for (let j = 0; j <localStorage.length; j++) {
// if(localStorage.hasOwnProperty(tag.children[j].id)){
//     tag.children[j].value=localStorage.getItem(tag.children[j].id);
//     if(tag.children[j].value=== 'true'){
//         tag.children[j].setAttribute('checked', 'checked');
//
//     }
// }
//     }
// }



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с поreturn  localStorage.getItem('text');мощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//

// let area=document.getElementById('comment');
// const btnSave=document.getElementById('save');
// const btnLast=document.getElementById('last');
// const btnNext=document.getElementById('next');
//
// btnSave.onclick=(ev)=>{
//   localStorage.setItem(localStorage.length+1,area.value)
// }
// btnLast.onclick=()=> {
//   btnNext.style.visibility = 'visible';
//   let index;
//   for (const key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//       if (localStorage.getItem(key) === area.value)
//         index = key;
//     }
//   }
//   if (index === '1'){
//     btnLast.style.visibility = 'hidden';
//   return;
// }
//   area.value=localStorage.getItem(index-1)
// }
//
//
//
// btnNext.onclick=()=> {
//   btnLast.style.visibility = 'visible';
//   let index;
//   for (const key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//       if (localStorage.getItem(key) === area.value)
//         index = key;
//     }
//
//   }
//   if (index === localStorage.length.toString()){
//     btnNext.style.visibility = 'hidden';
//     return;
//   }
//   area.value=localStorage.getItem(+index+1)
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

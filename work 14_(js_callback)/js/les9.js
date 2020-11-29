// Треба реалізувати свій розпорядок дня. Колбеками, промісами та асинк авейт.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.
//
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.
//
// #task
// console.time('ev')
// setTimeout(function () {
//     console.log('1');
// }, 3000)
// setTimeout(function () {
//     console.log('2')
// }, 1500)
// setTimeout(function () {
//     console.log('3')
// }, 1000)
// console.timeEnd('ev')
let chance = 0.3;
function myDay (message){
       return new Promise((resolve,reject) =>
    {
        setTimeout(() => {
           if( Math.random()>chance){
               resolve(message);
           }
           else{
               reject('Проспав!');
           }

        }, 2000)
    })
}

function cleanTeeth (cleanMsg){
    console.log('Бігом до ванни чистити зуби!!!');
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => {
            if( Math.random()>chance){
                resolve(cleanMsg);
            }
            else{
                reject('Не можу знайти пасту!');
            }

        }, 2000)
    })
}


function breakFest(breakMsg){
    console.log('Час гарно поїсти!');
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if( Math.random()>chance){
                resolve(breakMsg);
            }
            else{
                reject('А нема що їсти!!');
            }

        }, 2000)
    })
}

function wayToWork(workMsg){
    console.log('Бігом до роботи , бо не встигнеш');
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if( Math.random()>chance){
                resolve(workMsg);
            }
            else{
                reject('Не встиг на маршрутку!!');
            }

        }, 2000)
    })
}


function hardWork (hardMsg){
    console.log('Пора працювати!');
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if( Math.random()>chance){
                resolve(hardMsg);
            }
            else{
                reject('На роботі повний завал!');
            }

        }, 2000)
    })
}

function coffeBreak (coffeMsg){
    console.log('Йду я кавки випю');
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if( Math.random()>chance){
                resolve(coffeMsg);
            }
            else{
                reject('Всю каву випили!Напився(((');
            }

        }, 2000)
    })
}
function endWork(endMsg){
    console.log('Час іти на хату!');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>chance){
                resolve(endMsg)
            }
            else{
                reject('Соррян, треба лишитися після роботи')
            }
        }, 1500)
    })
}

function eatDinnner(dinnerMsg){
    console.log('Ти вдома, повечеряй!');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>chance){
                resolve(dinnerMsg);
            }
            else{
                reject('Вечері немає, хтось забув її приготувати!');
            }
        },1500)
    })
}
function goSleep(sleepMsg){
    console.log('Пора йти спати!');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>chance){
                resolve(dinnerMsg);
            }
            else{
                reject('Щось не спиться сьогодні!');
            }
        },1500)
    })
}




myDay('Будильник')
.then((result)=>{
    console.log(result);
    return cleanTeeth('Зуби блистять!')
})
    .then((result)=>{
        console.log(result);
        return breakFest('Мівіна')
    })
.then((result)=>{
    console.log(result);
    return wayToWork('Твоя маршрутка 3А')
})
.then((result)=> {
    console.log(result);
    return hardWork ('Дедлайн був вчора. Працюй активніше!')
    })
.then((result)=>{
    console.log(result);
    return coffeBreak ('Пора випити кавки!')
})
    .then((result)=>{
        console.log(result);
        return endWork('Пора закінчувати роботу!')
    })
    .then((result)=>{
        console.log(result);
        return eatDinnner('Було  дуже смачно!')
    })
    .then ((result)=>{
        console.log(result);
        return goSleep('Гарних снів')
    })
    .then ((result)=>{
        console.log(result);
    })
    .catch(error=>{
        console.log('error:',error);
    })

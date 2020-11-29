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
let chance = 0.4;

function myDay(message, cb) {
    console.log('Мій день:');
    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('Проспав!',null);
            return;
        }
       cb(null, message);

    }, 2000)
}

function cleanTeeth(cleanMsg, cb) {
    console.log('Бігом до ванни чистити зуби!!!');

    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('Не можу знайти пасту!');
            return;
        }
        cleanMsg='Зуби блистять!';
        cb(null, cleanMsg);

    }, 2000)
}


function breakFest(breakMsg, cb) {
    console.log('Час гарно поїсти!');
    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('А нема що їсти!!');
            return ;
        }
        breakMsg='Мівіна';
        cb(null, breakMsg);

    }, 2000)
}

function wayToWork(workMsg, cb) {
    console.log('Бігом до роботи , бо не встигнеш');
    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('Не встиг на маршрутку!!');
            return;
        }
        workMsg='Твоя маршрутка 3А';
        cb(null, workMsg);

    }, 2000)

}


function hardWork(hardMsg, cb) {
    console.log('Пора працювати!');

    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('На роботі повний завал!');
            return;
        }
        hardMsg= 'Дедлайн був вчора. Працюй активніше!';
        cb(null, hardMsg);

    }, 2000)
}

function coffeBreak(coffeMsg, cb) {
    console.log('Йду я кавки випю');
    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('Всю каву випили!Напився(((');
            return;
        }
        coffeMsg='Пора випити кавки!';
        cb(null, coffeMsg);

    }, 1500)

}

function endWork(endMsg, cb) {
    console.log('Час іти на хату!');

    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('Соррян, треба лишитися після роботи');
            return;
        }
        endMsg='Пора закінчувати роботу!';
        cb(null, endMsg);
    }, 1500)

}

function eatDinnner(dinnerMsg, cb) {
    console.log('Ти вдома, повечеряй!');

    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('Вечері немає, хтось забув її приготувати!');
            return;
        }
        dinnerMsg='Пора закінчувати роботу!';
        cb(null, dinnerMsg);
    }, 1500)

}

function goSleep(sleepMsg, cb) {
    console.log('Пора йти спати!');
    setTimeout(() => {
        if (Math.random() <= chance) {
            cb('Щось не спиться сьогодні!');
            return;
        }
        sleepMsg='Гарних снів';
        cb(null, sleepMsg);

    }, 1500)

}


myDay('Будильник ОК', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    cleanTeeth(result, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        breakFest(result, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            wayToWork(result, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
                hardWork(result, (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(result);
                    coffeBreak(result, (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log(result);
                        endWork(result, (err, result) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log(result);
                            eatDinnner(result, (err, result) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                console.log(result);
                                goSleep(result, () => {
                                    if (err) {
                                        console.log(err);
                                        return;
                                    }
                                    console.log(result);
                                })
                            })
                        })
                    })
                })

            })
        })
    })
})






// let userName = "SuperUser1234567";
// let second = 25200;
// let hours = Number.parseInt(second / 3600);
// let msg = `Пользователь ${userName} авторизовался ${hours} часов назад`;
// console.log(msg)

let nameRobot = 'робот серии а'
let serial = 1
function modify(str, n) {
    var result = str + (++n)
    return result
};
console.log(modify(nameRobot, serial))
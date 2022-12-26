function task1(arr) {
  arr.sort((a, b) => a - b);
  return console.log(arr, ", index of 6 = " + arr.indexOf(6));
}
// task1([1, 2, 56, 28, 90, 5, 6]);
/////////////////////////////////////////////////////////////////////////
// function task2(arr) {
//   const arrUnique = [];
//   arr.forEach((el) => {/////////////////////<----------------Вот здесь как использовтаь reduce, чтобы получить arrUnique
//     if (!arrUnique.includes(el)) {
//       arrUnique.push(el);
//     }
//   });
//   return console.log(arrUnique);
// }
function task2(arr) {
  return arr.reduce((acc, el) => {
    if (acc.length > 0) {
      if (!acc.includes(el)) acc.push(el);
      return acc;
    }
    acc.push(el);
    return acc;
  }, []);
}
task2([1, 2, 3, 4, 4, 5, 2, 9, 4]);
///////////////////////////////////////////////////////////////
function task3(arr) {
  const adultUsers = [];
  const youngUsers = [];
  arr.forEach((user) => {
    user.age >= 18 ? adultUsers.push(user) : youngUsers.push(user);
  });
  adultUsers.sort((el1, el2) => Number(el1.age) - Number(el2.age));
  youngUsers.sort((el1, el2) => Number(el1.age) - Number(el2.age));
  return console.log(adultUsers, youngUsers);
}
// task3([
//   { name: "Ivan", age: 18 },
//   { name: "Petr", age: 12 },
//   { name: "Sidor", age: 25 },
//   { name: "Pavel", age: 24 },
//   { name: "Sasha", age: 29 },
// ]);
/////////////////////////////////////////////////////////////////////////
function task3_part2(arr) {
  arr.forEach((user) => {
    if (user.age < 18) arr.splice(arr.indexOf(user), 1);
  });
  arr.sort((el1, el2) => +el1.age - +el2.age);
  return console.log(arr);
}
// task3_part2([
//     { name: "Ivan", age: 18 },
//     { name: "Petr", age: 12 },
//     { name: "Sidor", age: 25 },
//     { name: "Pavel", age: 24 },
//     { name: "Sasha", age: 29 },
//   ]);
//////////////////////////////////////////////////////////////////////
function task4(arr = [1, 10, 25, 67, 87, 56]) {
  arr.push(4);
  const length = arr.length;
  const lastChar = +arr.slice(-1).join("");
  arr.unshift(lastChar);
  return arr;
}
// task4([1, 10, 25, 67, 87, 56]);
////////////////////////////////////////////////////////////////////
function task5(arr) {
  const arr2 = arr.concat(task4());
  const indexOf90 = arr2.indexOf(90);
  arr2.splice(indexOf90, 1, 19, 2, 91);
  const arr3 = arr2.slice(-4);
  arr3.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);
  const sum = arr2.reduce((result, el) => {
    return result + el;
  }, 0);
}
// task5([2, 5, 90, 4]);
//////////////////////////////////////////////////////////////////
function task6(arr) {
  arr.push({ id: 4, name: "Дима", age: 17 });
  arr.reverse();
  const totalAge = arr.reduce((sum, el) => {
    return sum + el.age;
  }, 0);
}
// task6([
//   {id: 1, name: "Вася", age: 20},
//    {id: 2, name: "Петя", age: 19},
//    {id: 3, name: "Маша", age: 18}
// ]);
///////////////////////////////////////////////////////////////////
function task7(arr) {
  const usersAfterYear = arr
    .map(({ id, name, age }) => {
      age += 1;
      return { id, name, age };
    })
    .filter((user) => user.age >= 18);
  const usersAfterYearUniqueAge = [];
  usersAfterYear.forEach((userMain) => {
    if (!usersAfterYearUniqueAge.find((user) => userMain.age === user.age)) {
      usersAfterYearUniqueAge.push(userMain);
    }
  });
}
// task7([
//   { id: 1, name: "Вася", age: 19 },
//   { id: 2, name: "Петя", age: 18 },
//   { id: 3, name: "Маша", age: 17 },
//   { id: 4, name: "Света", age: 18 },
//   { id: 5, name: "Наташа", age: 17 },
//   { id: 6, name: "Женя", age: 12 },
//   { id: 7, name: "Коля", age: 30 },
//   { id: 8, name: "Настя", age: 16 },
//   { id: 9, name: "Антон", age: 19 },
//   { id: 10, name: "Иван", age: 20 },
//   { id: 11, name: "Павел", age: 16 },
//   { id: 12, name: "Денис", age: 20 },
// ]);

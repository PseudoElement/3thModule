function task1(arr) {
  arr.sort((a, b) => a - b);
  return console.log(arr, ", index of 6 = " + arr.indexOf(6));
}
// task1([1, 2, 56, 28, 90, 5, 6]);
/////////////////////////////////////////////////////////////////////////
function task2(arr) {
  const arrUnique = [];
  arr.forEach((el) => {
    if (!arrUnique.includes(el)) {
      arrUnique.push(el);
    }
  });
  return console.log(arrUnique);
}
// task2([1, 2, 3, 4, 4, 5, 2, 9, 4]);
///////////////////////////////////////////////////////////////
function task3(arr) {
  const adultUsers = [];
  const youngUsers = [];
  arr.forEach((user) => {
    user.age >= 18 ? adultUsers.push(user) : youngUsers.push(user);
  });
  const adultUsersSorted = adultUsers.reduce((newArr, el) => {
    console.log(newArr);
    if (newArr.length > 0) {
      for (let user of newArr) {
        console.log(user.age, el.age);
        if (user.age > el.age) {
          return newArr.splice(newArr.indexOf(user), 0, el);
        } else {
          return newArr.push(el);
        }
      }
      return newArr;
    }
    newArr.push(el);
    return newArr;
  }, []);
  // adultUsers.sort((el1, el2) => Number(el1.age) - Number(el2.age));
  // youngUsers.sort((el1, el2) => Number(el1.age) - Number(el2.age));
  return console.log(adultUsers, youngUsers);
}
task3([
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 24 },
  { name: "Sasha", age: 29 },
]);
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
  arr.push({ id: 4, name: "????????", age: 17 });
  arr.reverse();
  const totalAge = arr.reduce((sum, el) => {
    return sum + el.age;
  }, 0);
}
// task6([
//   {id: 1, name: "????????", age: 20},
//    {id: 2, name: "????????", age: 19},
//    {id: 3, name: "????????", age: 18}
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
//   { id: 1, name: "????????", age: 19 },
//   { id: 2, name: "????????", age: 18 },
//   { id: 3, name: "????????", age: 17 },
//   { id: 4, name: "??????????", age: 18 },
//   { id: 5, name: "????????????", age: 17 },
//   { id: 6, name: "????????", age: 12 },
//   { id: 7, name: "????????", age: 30 },
//   { id: 8, name: "??????????", age: 16 },
//   { id: 9, name: "??????????", age: 19 },
//   { id: 10, name: "????????", age: 20 },
//   { id: 11, name: "??????????", age: 16 },
//   { id: 12, name: "??????????", age: 20 },
// ]);

// Qo'shimcha masalalar ishlanishi.

// 1).
// let user = [
//   { id: 2, name: 'Umar', age: 25 },
//   { id: 1, name: 'Foziljon', age: 22 },
//   { id: 4, name: 'Mahmud', age: 30 },
//   { id: 3, name: 'Azimjon', age: 24 },
//   { id: 5, name: 'Behruz', age: 23 },
//   { id: 7, name: 'Muhammad', age: 20 },
//   { id: 6, name: 'Shoyatbek', age: 32 },
//   { id: 8, name: 'Abdulloh', age: 21 },
// ]
// function func(s) {
//   if (!s.localeCompare("id")) return user.sort((a, b) => a.id - b.id);
//   else if (!s.localeCompare("age")) return user.sort((a, b) => a.age - b.age);
//   else if (!s.localeCompare("name")) return user.sort((a, b) => a.name.localeCompare(b.name));
//   else return "Hato qiymat kiritdingiz."
// }
// console.log(func('age'));

// 2).
// let user = [
//   { id: 2, name: 'Umar', age: 25 },
//   { id: 1, name: 'Foziljon', age: 22 },
//   { id: 4, name: 'Mahmud', age: 30 },
//   { id: 3, name: 'Azimjon', age: 24 },
//   { id: 5, name: 'Behruz', age: 23 },
//   { id: 7, name: 'Muhammad', age: 20 },
//   { id: 6, name: 'Shoyatbek', age: 32 },
//   { id: 8, name: 'Abdulloh', age: 21 },
// ]
// let func = (p) => {
//   return (user.map((value, index) => {
//     value[p] = index;
//     return value;
//   }))
// }
// console.log(func("status"));

// 3).
// let arr1 = [1,2,3,5];
// let arr2 = [6,5,2,9];
// let arr = arr1.concat(arr2);
// if(arr.length%2===0){
//   let a = parseInt(arr.length/2-1);
//   let b = parseInt(arr.length/2);
//   console.log((arr[a]+arr[b])/2);
// }
// else{
//   let a = parseInt(arr.length/2);
//   console.log(arr[a]);
// }

// 4).
// let user = [
//   { name: 'Foziljon', status: 'Talaba' },
//   { name: 'Azimjon', status: 'Oqituvchi' },
//   { name: 'Mahmudjon', status: 'Menedjer' },
//   { name: 'Behruz', status: 'Jora' },
//   { name: 'Muhammadali', status: 'Talaba' },
//   { name: 'Shoyatbek', status: 'Assissent' },
//   { name: 'Eldor', status: 'Assissent' },
// ]
// let res = user.map(value => Object.values(value).join('')).join('').split('');
// let func = (p) => {
//   let count = 0
//   res.map(item => {
//     if (item === p) return count++;
//   })
//   return count;
// }
// console.log(func('A'));

// 5).
// let arr = [1, 2, 3, 4, 5, 6, 5, 4, 4, 3, 3, 2, 3, 5];
// let func = (p) => {
//   let obj = {};
//   for (i of arr) {
//     for (j of arr) {
//       if (i + j === p) obj[i] = j;
//     }
//   }
//   return Object.entries(obj);
// }
// console.log(func(8));
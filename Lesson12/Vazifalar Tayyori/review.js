// let obj = {}
// obj.name="Foziljon";
// console.log(obj, obj.name);

// new Map():=>> manashular mavjud  get(), has(), delete(), clear(),
// let map = new Map();
// map.age = 22;
// map.set("name", "Azimjon")
// map.set("year", 2001)

// let map = new Map([["name", "Foziljon"], ["age", 22]])
// map.forEach((value,key,arr) => {
//   console.log(arr);
// })
// console.log(map, map.get("name"), map.size);

// console.log(...map.entries());
// console.log(map.clear());
// console.log(map.size);
// console.log(map.values());
// console.log(map.keys());
// console.log(map.has("name"));
// console.log(map.delete("name"));
// console.log(map);
// let gen = map.entries();
// gen.next();
// gen.next();
// console.log(gen.next());
// console.log(map);
// console.log(Object.fromEntries(map).name);


// new Set():=>> manashular mavjud  add(), has(), delete(), clear()
// let obj = { name: "Foziljon" }
// let set = new Set();
// set.add(obj)
// console.log(set.has(obj));
// Qolgnlari ham shu holatda ishlaydi.

// new Map() va WeakMap() , new Set() va WeakSet() bir biriga o'xshash. Bitta farqi new Map() va new Set() ning qiymati keyinchalik null bo'lib qolsa oldingi ma'lumotlar xotiradan o'chib ketmaydi.
// new WeakMap() va new WeakSet() da esa qiymati keyinchalik null bo'lib qolsa oldingi qiymatlarini xotiradan o'chiradi. Ya'ni garbage collection ga tushadi.
// new WeakMap() => set(), get(), has(), delete();
// new WeakSet() => add(), has(), delete();

// let obj = { name: "IT name" }
// let map = new WeakMap([[obj, "webbrain"]]);
// console.log(map);
// console.log(map.get(obj));

// let user = [
//   { name: "webbrain" },
//   { status: "Talaba" },
//   { year: 2019 },
// ]

// let set = new WeakSet()
// set.add(user[0]).add(user[1]);
// console.log(set.has(user[0]));
// console.log(set.has(user[1]));
// console.log(set.has(user[2]));

// Recursion functions
// recursion function deb o'zini o'zi chaqiruvchi funcsiyalarga aytiladi. recursion functionsni ishlatishdan maqsad proectni tezlashtirish hisoblanadi.
// Misol:
// let func = (n)=>{
//   console.log(n);
//   if(n==1) return n;
//   func(--n);
// }
// func(5)
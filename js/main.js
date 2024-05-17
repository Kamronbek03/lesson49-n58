// Uyga vazifa /////////////////////
// high_order_functions //

// N1 //
// function getNamesWithGrade(grd, students) {
//   let studentListWithGrade = students.map((student) => {
//     let grade;
//     if (student.percent >= 85 && student.percent <= 100) {
//       grade = 5;
//     } else if (student.percent >= 70 && student.percent < 85) {
//       grade = 4;
//     } else if (student.percent >= 60 && student.percent < 70) {
//       grade = 3;
//     } else {
//       grade = 2;
//     }
//     return {
//       ...student,
//       grade,
//     };
//   });
//   return studentListWithGrade.filter((student) => student.grade === grd);
// }

// console.log(
//   getNamesWithGrade(5, [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ])
// );

// N2 //
// const getAnimalCount = (arr) =>
//   arr.reduce((acc, animal) => {
//     acc[animal] = (acc[animal] || 0) + 1;
//     return acc;
//   }, {});

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// console.log(getAnimalCount(animals));

// N3 //
// const getSquares = (arr) => arr.map((num) => num ** 2);
// console.log(getSquares([1, 2, 3, 4, 5]));

// N4 //
// const getPositiveSum = (arr) =>
//   arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
// console.log(getPositiveSum([1, -4, 12, 0, -3, 29, -150]));

// N5 //
// const getInitials = (str) =>
//   str
//     .split(" ")
//     .map((word) => word[0])
//     .join("");
// console.log(getInitials("George Raymond Richard Martin"));

// N6 //
// const getAgeDifference = (arr) => {
//   const sorted = arr.sort((a, b) => a.age - b.age);
//   const youngest = sorted[0].age;
//   const oldest = sorted[sorted.length - 1].age;
//   return oldest - youngest;
// };
// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// console.log(getAgeDifference(people));

// N7 //
// const separateEvenOdd = (arr) =>
//   arr.reduce(
//     (acc, num) => {
//       if (num % 2 === 0) {
//         acc.juft.push(num);
//       } else {
//         acc.toq.push(num);
//       }
//       return acc;
//     },
//     { juft: [], toq: [] }
//   );
// console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// N8 //
// const removeDuplicates = (arr) =>
//   arr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);

// console.log(removeDuplicates([1, 2, 3, 4, 2, 5, 3, 6]));

// N9 //
// const sortProducts = (products, key) =>
//   [...products].sort((a, b) => {
//     if (a[key] < b[key]) return -1;
//     if (a[key] > b[key]) return 1;
//     return 0;
//   });
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// console.log(sortProducts(products, "id"));

// N10 //
// const getBestRatedProduct = (products) =>
//   products.sort((a, b) => b.rating - a.rating)[0];
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// console.log(getBestRatedProduct(products));

// N11 //
// const getCheapestProduct = (products) =>
//   products.sort((a, b) => a.price - b.price)[0];
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// console.log(getCheapestProduct(products));

// N12 //
// const getTotalPrice = (products) =>
//   products.reduce((total, product) => total + product.price, 0);
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// console.log(getTotalPrice(products));

// N13 //
// const getProductNames = (products) => products.map(({ name }) => name);
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// console.log(getProductNames(products));

// N14 //
// const getProductNameById = (products, id) =>
//   products.find(({ id: productId }) => productId === id)?.name;
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// console.log(getProductNameById(products, 5));

// N15 //
// const removeProductById = (products, id) =>
//   products.filter(({ id: productId }) => productId !== id);
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// console.log(removeProductById(products, 4));

// N16 //
// function isStringOnlyLetters(str) {
//   return /^[a-zA-Z]+$/.test(str);
// }
// console.log(isStringOnlyLetters("Helloworld"));

// N17 //
// function getTruthyFalsy(arr) {
//   const truthy = arr.filter(Boolean);
//   const falsy = arr.filter((value) => !value);
//   return { truthy, falsy };
// }
// const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const result = getTruthyFalsy(input);
// console.log(result);

// N18 //
// function getWordLengths(str) {
//   return str.split(" ").map((word) => word.length);
// }
// const input = "Men Sultonqul Programmerman";
// const output = getWordLengths(input);
// console.log(output);

// N19 //
// function hasWhitespace(str) {
//   return str.split(" ").some((word) => word === "");
// }

// const input = "Men Sultonqul Programmerman";
// const output = hasWhitespace(input);
// console.log(output);

// N20 //
// function getKeyValueStrings(obj) {
//   return Object.entries(obj).map(([key, value]) => `${key}${value}`);
// }
// const input = { a: 2, b: 5, c: 7 };
// const output = getKeyValueStrings(input);
// console.log(output);

// N21 //
// function digitSum(num) {
//   if (num === 0) {
//     return 0;
//   }
//   return (num % 10) + digitSum(Math.floor(num / 10));
// }
// console.log(digitSum(156));

// N22 //
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// const averageProtcent =
//   pupils.reduce((acc, curr) => acc + curr.protcent, 0) / pupils.length;
// const newPupils = pupils.map((pupil) => ({
//   ...pupil,
//   age: 18,
//   city: "Tashkent",
// }));
// console.log(averageProtcent);
// console.log(newPupils);

// N23 //
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// const newPupils = pupils.map((pupil) => {
//   let grade;
//   if (pupil.protcent >= 90) {
//     grade = 5;
//   } else if (pupil.protcent >= 80) {
//     grade = 4;
//   } else if (pupil.protcent >= 70) {
//     grade = 3;
//   } else {
//     grade = 2;
//   }
//   return { ...pupil, grade };
// });
// console.log(newPupils);

// N24 //
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// const newPupils = pupils.map((pupil) => ({
//   ...pupil,
//   isPassed: pupil.protcent >= 70,
// }));
// console.log(newPupils);

// N25 //
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// const result = pupils.reduce(
//   (acc, curr) => {
//     if (curr.protcent >= 70) {
//       acc.passed++;
//     } else {
//       acc.failed++;
//     }
//     return acc;
//   },
//   { passed: 0, failed: 0 }
// );

// console.log(`Passed: ${result.passed}, Failed: ${result.failed}`);

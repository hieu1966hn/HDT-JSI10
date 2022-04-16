// let obj = {
//   name: "John",
//   age: 24,
//   address: '22 Jump Street'
// }

// /// sao chép đối tượng này vào một biến  có tên là obj2;
// let obj2 = {
//   name: "Hiếu",
//   age: 11,
//   hobbies: "Killed"
// }

// let obj3 = Object.assign(obj, obj2)


// console.log(obj3); // => 4 thuộc tính 

// /*
// Object.assign(target1, target2,.... source )

// => Object có tất cả các thuộc tính từ đối tượng khác
// */



//// VD mới về Object.assign

let MĐ = {
  name: "Minh Đức",
  age: 17,
  hobbies: 'Null',
  DucID: "001"
}


let BK = {
  name: "Bảo Khánh",
  age: 18,
  hobbies: 'Anime',
  KhanhID: "002"
}

let VT = {
  name: "Vũ Tùng",
  age: 17,
  hobbies: 'Many',
  TungID: "003"
}

// let hdt_jsi10 = Object.assign(MĐ, BK, VT);
// console.log("hdt_jsi10: ", hdt_jsi10); // => {}



/////// ------------------  Spread Syntax ---------------
/// Sử dụng trong fucntion call
// let sum = (x, y, z) => {
//   return x + y + z
// }

// let number = [1, 4, 7]; // tổng = 12

// console.log(sum(...number)); // Tách từng phần tử của mảng và gán vào tham số: x,y,z

// //// Copy object 
// let copy_Object = { ...BK } // cú pháp copy đối tượng với ...
// console.log("copy_Object: ", copy_Object);



// //// Copy Array
// let copy_Array = [...number];
// console.log("copy_Array: ", copy_Array);



// -------------- Nối Array ---------
let arr1 = ['abc', 34, 'Gaming'];
let number = [1, 4, 7];

/// => Nối 2 mảng này với nhau ?
let connector = [...arr1, ...number];
console.log("connector: ", connector);



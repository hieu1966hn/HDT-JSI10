
/////// Split
// let str = "Hello, hi, xin chao"
// let split = str.split(", ");
// console.log("split: ", split);


// let chuoi = "1,2,3,4,5,6,7,8,100,1000"; // Lọc toàn bộ số chẵn trong chuỗi và in ra
// let chuoiSplit = chuoi.split(",");
// console.log("chuoiSplit: ", chuoiSplit);


// // duyệt mảng: for, for in, for of
// for (let key of chuoiSplit) {
//   key = Number(key);// ép kiểu chuỗi -> số
//   // console.log(key); // key: String
//   if (key % 2 == 0) {
//     console.log(key);
//   }

// }

//// Slice: Dùng để cắt mảng với nhau

let a1 = ['hello', "hi", 100, "xin chào", 'no no'];
// let a2 = [1, 3, 4, 5, 6];

// tạo mảng a3 => a3 là toàn bộ phần tử kết hợp từ mảng a1 và a2
// C1: duyệt từng mảng => đẩy từng phần tử mảng vào mảng mới 
// C2: Sử dụng slice: 

let a3 = a1.slice(1, 4)// ?
console.log("a3: ", a3);








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

// let a1 = ['hello', "hi", 100, "xin chào", 'no no'];
// // let a2 = [1, 3, 4, 5, 6];

// // tạo mảng a3 => a3 là toàn bộ phần tử kết hợp từ mảng a1 và a2
// // C1: duyệt từng mảng => đẩy từng phần tử mảng vào mảng mới 
// // C2: Sử dụng slice: 

// let a3 = a1.slice(1, 4)// ?
// console.log("a3: ", a3);

/*
Đề bài: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1.6.8.9.0].
Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên.
(sử dụng filter() )

filter: Lọc phần tử mảng: dựa vào điều kiện cần lọc

*/

// let lop1 = [1, 2, 4, 5, 6];
// let lop2 = [1, 6, 8, 9, 0];

// // => Xác định phần tử nào trùng nhau đối với 2 mảng trên => in ra nó

// for (let key of lop1) { // duyet tưng phần tử mảng lop1
//   let temp = lop2.filter(item => item === key); // Lọc phần tử sao cho thỏa mãn điều kiện
//   if (temp[0]) { // Kiểm tra xem mảng temp có tồn tại phần tử hay không
//     console.log(temp[0]);// 1, 6
//   }

// }

//// VD về filter: Chỉ dành cho mảng

// let arr = [
//   ["apple", 15],
//   ["lemon", 5],
//   ["orange", 5],
//   ["banana", 5],
//   ["grape", 10],
// ]

// // Tìm và in ra tên quả nào có số lượng lớn hơn 5

// let arrFilter = arr.filter(item => item[1] > 5);
// console.log("arrFilter: ", arrFilter);///?

// /// VD2:
// let arrTest = [1, 3, 43241, 4, 5, -1, -300, -100];
// // Lọc ra các phần tử âm trong mảng;
// let phanTuAm = arrTest.filter(
//   item => item < 0
// )
// console.log("phanTuAm: ", phanTuAm);


///// map: Duyệt mảng và trả về kết quả| kết quả thay đổi
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// trả về 1 mảng| toàn bộ phần tử trong mảng arr kết quả là gấp 2: 2,4,6,8,10,..
//// C1
// let arrMap = arr.map(item => item * 2); 

//// C2
// let arrMap2 = arr.map(function (item) {
//   return item * 2;
// })

////C3
// let arrMap2 = arr.map((item) => {
//   return item * 2;
// })

// console.log("arrMap: ", arrMap2);

/*
Sử dụng map() với arr = [1,54,6,7] 
Để tạo ra một newArr có newArr[i] = arr[i] + 5.

*/
// let arr = [1, 54, 6, 7];
// let arrCong5 = arr.map(item => item + 5);
// console.log("arrCong5: ", arrCong5);

/*
Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. 
Hãy viết một hàm, duyệt cả các mảng m và n; 
loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
*/

let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];
// Viết hàm duyệt mảng sao cho => loại bỏ 1, 8,10,96,7

// C1: function, C2: const ()=>{}

const removeItem = (arr) => {
  return arr.filter(item => (item != 1 && item != 8 && item != 10 && item != 96 && item != 7))
}

console.log(removeItem(m));
console.log(removeItem(n));




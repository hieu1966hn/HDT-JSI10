let str = "Hello, hi, xin chao"
let split = str.split(", ");
console.log("split: ", split);


let chuoi = "1,2,3,4,5,6,7,8,100,1000"; // Lọc toàn bộ số chẵn trong chuỗi và in ra
let chuoiSplit = chuoi.split(",");
console.log("chuoiSplit: ", chuoiSplit);


// duyệt mảng: for, for in, for of
for (let key of chuoiSplit) {
  key = Number(key);// ép kiểu chuỗi -> số
  // console.log(key); // key: String
  if (key % 2 == 0) {
    console.log(key);
  }

}





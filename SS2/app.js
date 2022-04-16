let obj = {
  name: "John",
  age: 24,
  address: '22 Jump Street'
}

/// sao chép đối tượng này vào một biến  có tên là obj2;
let obj2 = {
  name: "Hiếu",
  age: 11,
  hobbies: "Killed"
}

let obj3 = Object.assign(obj, obj2)


console.log(obj3); // => 4 thuộc tính 

/*
Object.assign(target1, target2,.... source )

=> Object có tất cả các thuộc tính từ đối tượng khác
*/
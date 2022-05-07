// tham khảo trước cú pháp OOP trong JS

// 1. Khởi tạo class trong JS
// class Person {

//   // Khai báo phương thức say
//   say() {
//     alert("T đang nói đấy");
//   }
// }

// /// Áp dụng class
// let HuyBinh = new Person();
// HuyBinh.say();


// 2. Thuộc tính của class trong Javascript
class Person {
  // khai báo thuộc tính
  constructor(_name, _age, _address, _hobbies) {
    this.name = _name;
    this.age = _age;
    this.address = _address;
    this.hobbies = _hobbies

  }
  // constructor: là 1 phương thức khởi tạo mặc định của lớp

  say() {
    return "Hello I am a human"
  }

}

let me = new Person("Nguyễn Trung Hiếu", 25, "Tây Hô - Hà Nội", "coding, sleeping");
console.log("me: ", me);


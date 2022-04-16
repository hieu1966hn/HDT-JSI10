let students = [
  {
    name: "Minh Anh",
    age: 16,
    course: ["jsb", "jsa", "jsi"]
  },
  {
    name: "Huy Bình",
    age: 18,
    course: ["jsb", "jsa", "full stack web"]
  },
  {
    name: "Bảo Khánh",
    age: 17,
    course: ["jsb", "jsi", "full stack web"]
  },
  {
    name: "Đức Duy",
    age: 15,
    course: ["jsb", "jsa", "jsi"]
  }
]

/*
Mảng students có 4 phần tử
mỗi phần tử là 1 đối tượng
*/

// let input = prompt("Độ tuổi cần tìm?") // tuổi 

// B1: Duyệt mảng: for(; ;), for in, for of
/*
for in: Duyệt mảng với vị trí phần tử
for of: Duyệt mảng với từng phần tử mảng
*/
// for (let key of students) {
//   if (input == key.age) {
//     alert(`${key.name} là độ tuổi cần tìm `)
//   }
//   else {
//     alert("Không tìm thấy")
//   }
// }


/// Bài 1: ý b

let input = prompt("Người dùng nhập vào khóa học cần tìm"); // jsb
let nameOfCourse = [] // dùng để lưu tên người học khóa học cần tìm
for (let key of students) {
  if (input === key.course.find(
    function (item) { // item: đi từng phần tử trong mảng
      return item === input
    }
  )) {
    nameOfCourse.push(key.name)
  }
  // Tìm kiếm nội dung trong mảng thì dùng gi? 
}

if (nameOfCourse.length == 0) {
  alert("Chưa có lớp học này")
}
else {
  alert(`Học sinh học khóa học ${input} là: ${nameOfCourse}`)
}


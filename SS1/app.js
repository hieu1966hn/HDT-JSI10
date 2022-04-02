let students = [
  {
    name: "NVA",
    age: 16,
    course: ["mindX 01", "mindX 02", "mindX 03"]
  },
  {
    name: "NVB",
    age: 18,
    course: ["mindX 01", "mindX 02", "mindX 04"]
  },
  {
    name: "NVC",
    age: 17,
    course: ["mindX 01", "mindX 03", "mindX 04"]
  },
  {
    name: "NVD",
    age: 15,
    course: ["mindX 01", "mindX 02", "mindX 03"]
  }
]

/*
Mảng students có 4 phần tử
mỗi phần tử là 1 đối tượng
*/

let input = prompt("Độ tuổi cần tìm?") // tuổi 

// B1: Duyệt mảng: for(; ;), for in, for of
/*
for in: Duyệt mảng với vị trí phần tử
for of: Duyệt mảng với từng phần tử mảng
*/
for (let key of students) {
  if (input == key.age) {
    alert(`${key.name} là độ tuổi cần tìm `)
  }
  else {
    alert("Không tìm thấy")
  }
}
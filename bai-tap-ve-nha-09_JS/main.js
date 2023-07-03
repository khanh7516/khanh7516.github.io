const grades = [
  // Mảng chứa danh sách các đối tượng học viên và thông tin về tên, điểm số và giới tính của học viên.
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// Bai 1: Tính điểm trung bình của tất cả học viên
const calculateAverageGrade = (grades) => {
  // Sử dụng reduce() để tính tổng điểm của tất cả các học viên
  const sum = grades.reduce((acc, stu) => acc + stu.grade, 0);
  // Trả về giá trị trung bình bằng cách chia tổng điểm cho số lượng học viên
  return sum / grades.length;
};
console.log(
  `Điểm trung bình của tất cả học viên: ${calculateAverageGrade(grades)}`
);

// Bai 2: Tính điểm trung bình của học viên nam
const calculateAverageGradeOfMales = (grades) => {
  // Lọc danh sách các học viên nam
  const maleGrades = grades.filter((stu) => stu.sex === "M");
  // Tính tổng điểm của các học viên nam
  const sum = maleGrades.reduce((acc, stu) => acc + stu.grade, 0);
  // Trả về giá trị trung bình bằng cách chia tổng điểm cho số lượng học viên nam
  return sum / maleGrades.length;
};
console.log(
  `Điểm trung bình của học viên nam: ${calculateAverageGradeOfMales(grades)}`
);

// Bai 3: Tính điểm trung bình của học viên nữ
const calculateAverageGradeOfFemales = (grades) => {
  // Lọc danh sách các học viên nữ
  const femaleGrades = grades.filter((stu) => stu.sex === "F");
  // Tính tổng điểm của các học viên nữ
  const sum = femaleGrades.reduce((acc, stu) => acc + stu.grade, 0);
  // Trả về giá trị trung bình bằng cách chia tổng điểm cho số lượng học viên nữ
  return sum / femaleGrades.length;
};
console.log(
  `Điểm trung bình của học viên nữ: ${calculateAverageGradeOfFemales(grades)}`
);

// Bai 4: Tìm học viên nam có điểm cao nhất
const findMaleWithHighestGrade = (grades) => {
  // Lọc danh sách các học viên nam
  const maleGrades = grades.filter((stu) => stu.sex === "M");
  // Sắp xếp danh sách học viên nam theo điểm số giảm dần
  maleGrades.sort((a, b) => b.grade - a.grade);
  // Trả về học viên có điểm số cao nhất (phần tử đầu tiên trong danh sách sau khi đã sắp xếp)
  return maleGrades[0];
};
console.log(
  `Học viên nam có điểm cao nhất là ${
    findMaleWithHighestGrade(grades).name
  } với ${findMaleWithHighestGrade(grades).grade} điểm.`
);

// Bai 5: Tìm học viên nữ có điểm cao nhất
const findFemaleWithHighestGrade = (grades) => {
  // Lọc danh sách các học viên nữ
  const femaleGrades = grades.filter((stu) => stu.sex === "F");
  // Sắp xếp danh sách học viên nữ theo điểm số giảm dần
  femaleGrades.sort((a, b) => b.grade - a.grade);
  // Trả về học viên có điểm số cao nhất (phần tử đầu tiên trong danh sách sau khi đã sắp xếp)
  return femaleGrades[0];
};
console.log(
  `Học viên nữ có điểm cao nhất là ${
    findFemaleWithHighestGrade(grades).name
  } với ${findFemaleWithHighestGrade(grades).grade} điểm.`
);

// Bai 6: Tìm học viên nam có điểm thấp nhất
const findMaleWithLowestGrade = (grades) => {
  // Lọc danh sách các học viên nam
  const maleGrades = grades.filter((stu) => stu.sex === "M");
  // Sắp xếp danh sách học viên nam theo điểm số tăng dần
  maleGrades.sort((a, b) => a.grade - b.grade);
  // Trả về học viên có điểm số thấp nhất (phần tử đầu tiên trong danh sách sau khi đã sắp xếp)
  return maleGrades[0];
};
console.log(
  `Học viên nam có điểm thấp nhất là ${
    findMaleWithLowestGrade(grades).name
  } với ${findMaleWithLowestGrade(grades).grade} điểm`
);

// Bai 7: Tìm học viên nữ có điểm thấp nhất
const findFemaleWithLowestGrade = (grades) => {
  // Lọc danh sách các học viên nữ
  const femaleGrades = grades.filter((stu) => stu.sex === "F");
  // Sắp xếp danh sách học viên nữ theo điểm số tăng dần
  femaleGrades.sort((a, b) => a.grade - b.grade);
  // Trả về học viên có điểm số thấp nhất (phần tử đầu tiên trong danh sách sau khi đã sắp xếp)
  return femaleGrades[0];
};
console.log(
  `Học viên nữ có điểm thấp nhất là ${
    findFemaleWithLowestGrade(grades).name
  } với ${findFemaleWithLowestGrade(grades).grade} điểm.`
);

// Bai 8: Tìm học viên có điểm cao nhất
const findMaxGrade = (grades) => {
  // Sao chép mảng grades để không ảnh hưởng đến mảng gốc
  const sortedGrades = [...grades].sort((a, b) => b.grade - a.grade);
  // Trả về học viên có điểm số cao nhất (phần tử đầu tiên trong danh sách sau khi đã sắp xếp)
  return sortedGrades[0];
};
console.log(
  `Học viên có điểm cao nhất là ${findMaxGrade(grades).name} với ${
    findMaxGrade(grades).grade
  } điểm.`
);

// Bai 9: Tìm học viên có điểm thấp nhất
const findMinGrade = (grades) => {
  // Sao chép mảng grades để không ảnh hưởng đến mảng gốc
  const sortedGrades = [...grades].sort((a, b) => a.grade - b.grade);
  // Trả về học viên có điểm số thấp nhất (phần tử đầu tiên trong danh sách sau khi đã sắp xếp)
  return sortedGrades[0];
};
console.log(
  `Học viên có điểm thấp nhất là ${findMinGrade(grades).name} với ${
    findMinGrade(grades).grade
  } điểm.`
);

// Bai 10: Lọc danh sách các học viên nữ
const getAllFemales = (grades) =>
  grades.filter((student) => student.sex === "F");
console.log("Danh sách cách học viên nữ: ");
console.log(getAllFemales(grades));

// Bai 11: Sắp xếp danh sách học viên theo thứ tự tăng dần của bảng chữ cái
const sortNamesAscending = (grades) => {
  // Sao chép mảng grades để không ảnh hưởng đến mảng gốc đồng thời sắp xếp mảng theo thứ tự tăng dần của bảng chữ cái bằng method localeCompare
  const sortedNames = [...grades].sort((a, b) => a.name.localeCompare(b.name));
  // Trả về danh sách đã sắp xếp
  return sortedNames;
};
console.log("Danh sách học viên theo thứ tự tăng dần bảng chữ cái trong tên: ");
console.log(sortNamesAscending(grades));

//Bai 12: Sắp xếp thứ hạng học viên theo chiều giảm dần
const sortGradesDescending = (grades) => {
  //tạo một bản sao của mảng grades bằng cách sử dụng toán tử spread ([...grades]) để không ảnh hưởng đến mảng gốc.
  //Sau đó, hàm sort được gọi để sắp xếp mảng theo thứ tự giảm dần của thuộc tính grade của từng phần tử.
  const sortedGrades = [...grades].sort((a, b) => b.grade - a.grade);
  return sortedGrades; // Trả về mảng mới đã sắp xếp
};

console.log("Danh sách học viên theo thứ tự giảm dần của thứ hạng là: ");
console.log(sortGradesDescending(grades));

//Bai 13: Lấy ra học viên Nữ có tên bắt đầu bằng “J”
const getFemalesWithNameStartingWithJ = (grades) => {
  return grades.filter(
    (student) => student.sex === "F" && student.name.startsWith("J")
  ); //dùng filter lọc mảng grades thỏa mãn các điều kiện học viên là nữ có tên bắt đầu bằng 'J'
};
console.log("Danh sách học viên nữ có tên bắt đầu bằng chứ 'J' là: ");
console.log(getFemalesWithNameStartingWithJ(grades));

//Bai 14: Lấy ra top 5 người có thứ hạng cao nhất trong lớp
const getTopFiveStudents = (grades) => {
  //tạo một bản sao của mảng grades bằng cách sử dụng toán tử spread ([...grades]) để không ảnh hưởng đến mảng gốc.
  //Sau đó, hàm sort được gọi để sắp xếp mảng theo thứ tự giảm dần của thuộc tính grade của từng phần tử.
  const sortedGrades = [...grades].sort((a, b) => b.grade - a.grade);
  return sortedGrades.slice(0, 5); //lấy năm phần tử đầu tiên của mảng mới khi đã sắp xếp giảm dần theo thứ hạng => 5 học viên có thứ hạng cao nhất
};

console.log("Danh sách 5 học viên thứ hạng cao nhất là: ");
console.log(getTopFiveStudents(grades));

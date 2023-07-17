let student_warning = {
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "123456789",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            total_off: 3,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher: "Nguyễn Hàn Duy",
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
    ],
    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789",
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321",
        },
    ],
};

// Dựa vào thông tin của object student_warning. Hãy hiển thị dự liệu tương tự như demo trong mã HTML

let tbody = document.getElementsByName('tbody')




const renderStudent = (studentList) => {
    for(let i = 0; i < studentList.length; i++) {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td rowspan="${studentList[i].detail_info.length}">${i + 1}</td>
        <td rowspan="${studentList[i].detail_info.length}">${studentList[i].name}</td>
        <td rowspan="${studentList[i].detail_info.length}">${studentList[i].email}</td>
        <td rowspan="${studentList[i].detail_info.length}">${studentList[i].phone}</td>
        <td rowspan="${studentList[i].detail_info.length}" class="text-center">${studentList[i].total_off}/${studentList[i].sessions}</td>
        <td class="text-center">${studentList[i].detail_info[0].date}</td>
        <td>${studentList[i].detail_info[0].note}</td>
        <td>${studentList[i].detail_info[0].teacher}</td>`
        tbody.appendChild(tr)
        if(studentList[i].detail_info.length > 1) {
            for(let j = 1; j < studentList[i].detail_info.length; j++) {
                let tr2 = document.createElement('tr')
                tr2.innerHTML = `<td class="text-center">${studentList[i].detail_info[j].date}</td>
                <td>${studentList[i].detail_info[j].note}</td>
                <td>${studentList[i].detail_info[j].teacher}</td>`
                tbody.appendChild(tr2)
            }

        }
    }



}

const rederClass = (classInfo) => {

}

renderStudent(student_warning.students)
rederClass(student_warning)
function validateAndDispla() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (studentId.length !== 6) {
        alert('ID học sinh phải có 6 ký tự');
        return;
    }

    if (studentName.trim() === '') {
        alert('Tên sinh viên không được để trống');
        return;
    }

    if (age < 18) {
        alert('Độ tuổi phải từ 18 tuổi trở lên');
        return;
    }

    if (!/^0[0-9]{9}$/.test(phone)) {
        alert('Điện thoại phải có định dạng VN (bắt đầu bằng số 0 và theo sau là 9 chữ số)');
        return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Invalid email format');
        return;
    }

    const stu = `Student ID: ${studentId}<br>
                        Student Name: ${studentName}<br>
                        Age: ${age}<br>
                        Phone: ${phone}<br>
                        Email: ${email}`;

    document.getElementById('stu').innerHTML = stu;
}

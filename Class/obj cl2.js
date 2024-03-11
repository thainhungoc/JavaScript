// Định nghĩa lớp Job
class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

// Mảng chứa danh sách công việc
let jobs = [];

// Hàm thêm mới công việc vào mảng
function addJob() {
    let id = prompt("Nhập ID của công việc:");
    let title = prompt("Nhập tiêu đề của công việc:");
    let description = prompt("Nhập mô tả của công việc:");
    let completed = prompt("Công việc đã hoàn thành chưa? (true/false):");

    let job = new Job(id, title, description, completed === 'true');
    jobs.push(job);
    console.log("Công việc đã được thêm vào danh sách.");
}

// Hàm in ra danh sách công việc
function displayJobs() {
    console.log("\nDanh sách công việc:");
    jobs.forEach(job => {
        console.log(`ID: ${job.id}`);
        console.log(`Tiêu đề: ${job.title}`);
        console.log(`Mô tả: ${job.description}`);
        console.log(`Hoàn thành: ${job.completed}`);
        console.log("------------");
    });
}

// Hàm tìm kiếm công việc theo id
function searchJobById() {
    let id = prompt("Nhập ID của công việc cần tìm:");
    let found = false;

    for (let job of jobs) {
        if (job.id === id) {
            console.log("Công việc đã tìm thấy:");
            console.log(`ID: ${job.id}`);
            console.log(`Tiêu đề: ${job.title}`);
            console.log(`Mô tả: ${job.description}`);
            console.log(`Hoàn thành: ${job.completed}`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Không tìm thấy công việc.");
    }
}

// Hàm chạy chương trình
function runProgram() {
    while (true) {
        let choice = prompt("Chọn lựa chọn (1: Thêm công việc, 2: Hiển thị công việc, 3: Tìm kiếm công việc theo ID, 4: Thoát):");

        switch (choice) {
            case '1':
                addJob();
                break;
            case '2':
                displayJobs();
                break;
            case '3':
                searchJobById();
                break;
            case '4':
                console.log("Chương trình đã kết thúc.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

// Chạy chương trình
runProgram();

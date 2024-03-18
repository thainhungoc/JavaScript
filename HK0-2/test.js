// Lấy dữ liệu từ Local Storage
const storedData = localStorage.getItem('myData');

// Kiểm tra xem dữ liệu đã được lưu trong Local Storage chưa
if (storedData) {
    const data = JSON.parse(storedData);

    // Render dữ liệu vào phần Header
    document.querySelector('.container-header__1').textContent = data.headerText1;
    document.querySelector('.container-header__2').textContent = data.headerText2;
    document.querySelector('.about-me__left h5').textContent = data.aboutMeHeaderText;
    document.querySelector('.about-me__left-p').textContent = data.aboutMeParagraph;
    document.querySelector('.about-me__left--infor-1 p:nth-child(1)').textContent = data.fullName;
    document.querySelector('.about-me__left--infor-1 p:nth-child(2)').textContent = data.age;
    document.querySelector('.about-me__left--infor-1 p:nth-child(3)').textContent = data.languages;
    document.querySelector('.about-me__left--infor-1 p:nth-child(4)').textContent = data.phoneNo;
    document.querySelector('.about-me__left--infor-1 p:nth-child(5)').textContent = data.email;
    document.querySelector('.about-me__left--infor-1 p:nth-child(6)').textContent = data.address;

    // Render dữ liệu vào phần My Projects
    const projectCells = document.querySelectorAll('.my-project__cell');
    projectCells.forEach((cell, index) => {
        const projectData = data.projects[index];
        cell.querySelector('h5').textContent = projectData.title;
        cell.querySelector('.mini').textContent = projectData.categories;
        cell.querySelector('.content').textContent = projectData.description;
        cell.querySelector('.infor img').src = projectData.imageSrc;
        cell.querySelector('.infor div p:nth-child(1)').textContent = projectData.date;
        cell.querySelector('.infor div p:nth-child(2)').textContent = projectData.clients;
        cell.querySelector('.infor div p:nth-child(3)').textContent = projectData.tech;
        cell.querySelector('.infor div p:nth-child(4)').textContent = projectData.type;
        cell.querySelector('.infor div p:nth-child(5)').textContent = projectData.url;
    });
}


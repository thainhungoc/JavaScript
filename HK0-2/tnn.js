// Dữ liệu mẫu
const localStorageData = {
    header: {
        containerHeader1: "Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem ipsum is has been the industry's standard dummy test ever since the",
        containerHeader2: "1500s",
        containerHeader3: {
            downloadCV: "Download CV"
        }
    },
    aboutMe: {
        creativityText: "Creativity bleeds from the pen of inspiration.",
        aboutMeLeft: {
            paragraph1: "I am your client Consultant having 8+ years of experience in this field provides complete range of marketing materials and clienting solution to any industry as well as corporate clients maintaining their reputation and increasing the clients awearness using PR & other print media & online marketing activities.",
            paragraph2: "Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem ipsum is has been the industry's standard dummy test ever since the 1500s.",
            fullName: "Maria Ilvor",
            age: "26 Years",
            languages: "English, spanish",
            phone: "+00 9876543210",
            email: "example@gmail.com",
            address: "Ruami Mello Moraes,- Salvador - MA, 40352, Brazail"
        },
        aboutMeRight: [
            { title: "Photoshop", content: "Lorem ipsum is simply dummy test of the printing" },
            { title: "HTML", content: "Lorem ipsum is simply dummy test of the printing" },
            { title: "PHP", content: "Lorem ipsum is simply dummy test of the printing" },
            { title: "Javascript", content: "Lorem ipsum is simply dummy test of the printing" }
        ]
    },
    myProjects: [
        { 
            title: "BonzaMart - Super market",
            category: "3D Graphics | Templates",
            content: "Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem ipsum is has been the industry's standard dummy test ever since the 1500s.",
            date: "1, Jan - 2023",
            client: "Symphony",
            tech: "Angular, Nodejs, Ios",
            type: "eCommerce",
            url: "www.your-project-url.com",
            image: "/1.jpg"
        },
        { 
            title: "Show Mania- Entertainment",
            category: "Web Design",
            content: "Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem ipsum is has been the industry's standard dummy test ever since the 1500s.",
            date: "1, Jan - 2023",
            client: "Symphony",
            tech: "Angular, Nodejs, Ios",
            type: "eCommerce",
            url: "www.your-project-url.com",
            image: "/2.jpg"
        },
        { 
            title: "World Today - Portal",
            category: "Web Design",
            content: "Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem ipsum is has been the industry's standard dummy test ever since the 1500s.",
            date: "1, Jan - 2023",
            client: "Symphony",
            tech: "Angular, Nodejs, Ios",
            type: "eCommerce",
            url: "www.your-project-url.com",
            image: "/3.jpg"
        },
        { 
            title: "Doctory - Health care",
            category: "Developer",
            content: "Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem ipsum is has been the industry's standard dummy test ever since the 1500s.",
            date: "1, Jan - 2023",
            client: "Symphony",
            tech: "Angular, Nodejs, Ios",
            type: "eCommerce",
            url: "www.your-project-url.com",
            image: "/4.jpg"
        }
    ]
};

// Lưu trữ dữ liệu vào Local Storage
localStorage.setItem('data', JSON.stringify(localStorageData));

// Render dữ liệu từ Local Storage
document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem('data'));

    // Render phần header
    document.querySelector('.container-header__1').textContent = data.header.containerHeader1;
    document.querySelector('.container-header__2').textContent = data.header.containerHeader2;
    document.querySelector('.container-header__3-1').textContent = data.header.containerHeader3.downloadCV;

    // Render phần about me
    document.querySelector('.about-me h5').textContent = data.aboutMe.creativityText;
    document.querySelector('.about-me__left h5').textContent = data.aboutMe.aboutMeLeft.paragraph1;
    document.querySelectorAll('.about-me__left-p')[1].textContent = data.aboutMe.aboutMeLeft.paragraph2;
    document.querySelector('.about-me__left--infor-1 p:nth-child(1)').textContent = data.aboutMe.aboutMeLeft.fullName;
    document.querySelector('.about-me__left--infor-1 p:nth-child(2)').textContent = data.aboutMe.aboutMeLeft.age;
    document.querySelector('.about-me__left--infor-1 p:nth-child(3)').textContent = data.aboutMe.aboutMeLeft.languages;
    document.querySelector('.about-me__left--infor-1 p:nth-child(4)').textContent = data.aboutMe.aboutMeLeft.phone;
    document.querySelector('.about-me__left--infor-1 p:nth-child(5)').textContent = data.aboutMe.aboutMeLeft.email;
    document.querySelector('.about-me__left--infor-1 p:nth-child(6)').textContent = data.aboutMe.aboutMeLeft.address;
    data.aboutMe.aboutMeRight.forEach((item, index) => {
        document.querySelectorAll('.about-me__right h5')[index].textContent = item.title;
        document.querySelectorAll('.about-me__right p')[index].textContent = item.content;
    });

    // Render phần project
    data.myProjects.forEach((item, index) => {
        const cell = document.querySelector(`.my-project__cell-${index + 1}`);
        cell.querySelector('h5').textContent = item.title;
        cell.querySelector('.mini').textContent = item.category;
        cell.querySelector('.content').textContent = item.content;
        const inforDiv = cell.querySelector('.infor');
        inforDiv.querySelector('img').setAttribute('src', item.image);
        const inforDetails = inforDiv.querySelectorAll('p');
        inforDetails[0].textContent = `Date: ${item.date}`;
        inforDetails[1].textContent = `Clients: ${item.client}`;
        inforDetails[2].textContent = `Tech: ${item.tech}`;
        inforDetails[3].textContent = `Type: ${item.type}`;
        inforDetails[4].textContent = `URL: ${item.url}`;
    });
});

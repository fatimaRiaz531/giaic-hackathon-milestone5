// // script.js

// document.getElementById('resumeForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get user input
//     const username = document.getElementById('username').value;
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const educationList = document.getElementById('educationList').innerHTML;
//     const workList = document.getElementById('workList').innerHTML;
//     const skillsList = document.getElementById('skillsList').innerHTML;


//     // Generate resume content
//     const resumeContent = `
//         <h3>${name}</h3>
//         <p>Email: ${email}</p>
//         <p>Phone: ${phone}</p>
//         <p>Address: ${address}</p>
//         <h4>Education</h4>
//         <div>${educationList}</div>
//         <h4>Work Experience</h4>
//         <div>${workList}</div>
//         <h4>Skills</h4>
//         <div>${skillsList}</div>
//     `;

//     // Display the resume
//     document.getElementById('resumeContent').innerHTML = resumeContent;
//     document.getElementById('resumeOutput').style.display = 'block';

//     // Generate unique URL
//     const resumeLink = `https://${username}.vercel.app/resume`;
//     document.getElementById('resumeLink').href = resumeLink;})





document.getElementById('addEducation').addEventListener('click', function() {
    const educationInput = document.getElementById('education');
    const educationValue = educationInput.value.trim();
    if (educationValue) {
        const educationList = document.getElementById('educationList');
        const newEducation = document.createElement('div');
        newEducation.textContent = educationValue;
        educationList.appendChild(newEducation);
        educationInput.value = ''; // Clear input field
    }
});

document.getElementById('addWork').addEventListener('click', function() {
    const workInput = document.getElementById('work');
    const workValue = workInput.value.trim();
    if (workValue) {
        const workList = document.getElementById('workList');
        const newWork = document.createElement('div');
        newWork.textContent = workValue;
        workList.appendChild(newWork);
        workInput.value = ''; // Clear input field
    }
});

document.getElementById('addSkill').addEventListener('click', function() {
    const skillsInput = document.getElementById('skills');
    const skillsValue = skillsInput.value.trim();
    if (skillsValue) {
        const skillsList = document.getElementById('skillsList');
        const newSkill = document.createElement('div');
        newSkill.textContent = skillsValue;
        skillsList.appendChild(newSkill);
        skillsInput.value = ''; // Clear input field
    }
});

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    // Get the inner HTML of the lists
    const educationList = document.getElementById('educationList').innerHTML;
    const workList = document.getElementById('workList').innerHTML;
    const skillsList = document.getElementById('skillsList').innerHTML;

    // Generate resume content without headings
    const resumeContent = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <div>${educationList}</div>
        <div>${workList}</div>
        <div>${skillsList}</div>
    `;

    // Display the resume
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').style.display = 'block';

    // Function to generate a new URL based on the user's name
    function generateResumeLink(username) {
        const baseUrl = "https://username.vercel.app/resume";
        const newUrl = baseUrl.replace("username", username);
        document.getElementById("resumeLink").href = newUrl;
        document.getElementById("resumeLink").innerText = newUrl;
    }

    // Function to download the resume as PDF
    downloadResume.addEventListener('click',()=>{
        window.print()
    })

    // Example usage: Call this function with the user's name
    generateResumeLink("yourName"); // Replace "yourName" with the actual name
});
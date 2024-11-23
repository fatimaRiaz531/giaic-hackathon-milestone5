// script.js

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const educationList = document.getElementById('educationList').innerHTML;
    const workList = document.getElementById('workList').innerHTML;
    const skillsList = document.getElementById('skillsList').innerHTML;

    // Generate resume content
    const resumeContent = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <h4>Education</h4>
        <div>${educationList}</div>
        <h4>Work Experience</h4>
        <div>${workList}</div>
        <h4>Skills</h4>
        <div>${skillsList}</div>
    `;

    // Display the resume
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').style.display = 'block';

    // Generate unique URL
    const resumeLink = `https://${username}.vercel.app/resume`;
    document.getElementById('resumeLink').href = resumeLink;})
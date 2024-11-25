document.getElementById('addEducation').addEventListener('click', function() {
    const educationInput = document.getElementById('education');
    const educationValue = educationInput.value.trim();
    if (educationValue) {
        const educationList = document.getElementById('educationList');
        const newEducation = document.createElement('div');
        newEducation.textContent = educationValue;
        educationList.appendChild(newEducation);
        educationInput.value = ''; 
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
        workInput.value = ''; 
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
        skillsInput.value = ''; d
    }
});

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    const educationList = document.getElementById('educationList').innerHTML;
    const workList = document.getElementById('workList').innerHTML;
    const skillsList = document.getElementById('skillsList').innerHTML;

    const resumeContent = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <div>${educationList}</div>
        <div>${workList}</div>
        <div>${skillsList}</div>
    `;

    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').style.display = 'block';

    function generateResumeLink(username) {
        const baseUrl = "https://username.vercel.app/resume";
        const newUrl = baseUrl.replace("username", username);
        document.getElementById("resumeLink").href = newUrl;
        document.getElementById("resumeLink").innerText = newUrl;
    }

    downloadResume.addEventListener('click',()=>{
        window.print()
    })

   
});
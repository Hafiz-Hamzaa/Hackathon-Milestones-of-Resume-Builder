let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeDisplayElement = document.getElementById('resume-preview') as HTMLDivElement;
let downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
// HANDLING FORM SUBMISSION
form.addEventListener('submit' , (event:Event)=>{
    event.preventDefault(); // prevent page reload

    // Collection Input 
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const degree = (document.getElementById('degree') as HTMLInputElement).value
    const institute = (document.getElementById('institute') as HTMLInputElement).value
    const duration = (document.getElementById('duration') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    // const profileImage = (document.getElementById('profile-image') as HTMLInputElement).files[0]
    const profileImageInput = document.getElementById('profile-image') as HTMLInputElement;
const profileImage = profileImageInput.files && profileImageInput.files[0];

if (!profileImage) {
    console.error('No profile image selected');
    return;
}

    // Generate resume content 

const resumeHTML = `
<div class="resume-container">
    <h1>Resume Download</h1>
    <div class="profile-section">
        <img src="${URL.createObjectURL(profileImage)}" alt="Profile Image" width="100" height="100">
        <h2><span contenteditable="true">${name}</span></h2>
        <p><span contenteditable="true">${email} | ${phone} </span></p>
    </div>
    <hr>
    <section>
        <h3>Education</h3>
        <ul>
            <li><b>Degree:</b><span contenteditable="true"> ${degree}</span></li>
            <li><b>Institute:</b><span contenteditable="true"> ${institute}</span></li>
            <li><b>Duration:</b> <span contenteditable="true">${duration}</span></li>
        </ul>
    </section>
    <section>
        <h3>Skills</h3>
        <ul>
            <span contenteditable="true">${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</span>
        </ul>
    </section>
    <section>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
    </section>
</div>

`;     // Handle Download Button
    downloadPdfButton.addEventListener('click',()=>{
    window.print();
})
       // Display Generated Resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML; 
    } else {
        console.error('The resume display element is missing.')
    }

})

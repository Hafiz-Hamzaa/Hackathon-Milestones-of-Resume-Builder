let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeDisplayElement = document.getElementById('resume-preview') as HTMLDivElement
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
    <h1>Dynamic Resume</h1>
    <div class="profile-section">
        <img src="${URL.createObjectURL(profileImage)}" alt="Profile Image" width="100" height="100">
        <h2>${name}</h2>
        <p>${email} | ${phone}</p>
    </div>
    <hr>
    <section>
        <h3>Education</h3>
        <ul>
            <li><b>Degree:</b> ${degree}</li>
            <li><b>Institute:</b> ${institute}</li>
            <li><b>Duration:</b> ${duration}</li>
        </ul>
    </section>
    <section>
        <h3>Skills</h3>
        <ul>
            ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    </section>
    <section>
        <h3>Experience</h3>
        <p>${experience}</p>
    </section>
</div>

`;
       // Display Generated Resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML; 
    } else {
        console.error('The resume display element is missing.')
    }

})



// // Use 'let' instead of 'const' for these declarations
// let form = document.getElementById('resume-form') as HTMLFormElement;
// let generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
// let resumePreview = document.getElementById('resume-preview') as HTMLDivElement;

// generateBtn?.addEventListener('click', (e) => {
//   e.preventDefault();

//   const name = (document.getElementById('name') as HTMLInputElement).value;
//   const email = (document.getElementById('email') as HTMLInputElement).value;
//   const phone = (document.getElementById('phone') as HTMLInputElement).value;
//   const degree = (document.getElementById('degree') as HTMLInputElement).value;
//   const institute = (document.getElementById('institute') as HTMLInputElement).value;
//   const duration = (document.getElementById('duration') as HTMLInputElement).value;
//   const skills = (document.getElementById('skills') as HTMLInputElement).value;
//   const experience = (document.getElementById('experience') as HTMLInputElement).value;

//   const resumeContent = `
//     <div class="resume-content">
//       <h1>${name}</h1>
//       <p>${email} | ${phone}</p>
//       <h2>Education</h2>
//       <p>${degree}, ${institute}, ${duration}</p>
//       <h2>Skills</h2>
//       <ul>
//         ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
//       </ul>
//       <h2>Experience</h2>
//       <p>${experience}</p>
//     </div>
//   `;

//   resumePreview.innerHTML = resumeContent;
// });


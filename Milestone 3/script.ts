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

    // Generate resume content 
    const resumeHTML = `
    <h2><b>Dynamic Resume</b></h2>
    <h3>Person Info</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p><b>Degree:</b>${degree}</p>
    <p><b>Institute:</b>${institute}</p>
    <p><b>Duration:</b>${duration}</p>

    <h3>Skills</h3>
    <p><b>Skills:</b>${skills}</p>

    <h3>Experience</h3>
    <p><b>Experience:</b>${experience}</p>
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


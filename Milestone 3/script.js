var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-preview');
// HANDLING FORM SUBMISSION
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collection Input 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institute = document.getElementById('institute').value;
    var duration = document.getElementById('duration').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Generate resume content 
    var resumeHTML = "\n    <h2><b>Dynamic Resume</b></h2>\n    <h3>Person Info</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p><b>Degree:</b>").concat(degree, "</p>\n    <p><b>Institute:</b>").concat(institute, "</p>\n    <p><b>Duration:</b>").concat(duration, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b>").concat(skills, "</p>\n\n    <h3>Experience</h3>\n    <p><b>Experience:</b>").concat(experience, "</p>\n    ");
    // Display Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
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

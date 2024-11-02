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
    // const profileImage = (document.getElementById('profile-image') as HTMLInputElement).files[0]
    var profileImageInput = document.getElementById('profile-image');
    var profileImage = profileImageInput.files && profileImageInput.files[0];
    if (!profileImage) {
        console.error('No profile image selected');
        return;
    }
    // Generate resume content 
    var resumeHTML = "\n<div class=\"resume-container\">\n    <h1>Dynamic Resume</h1>\n    <div class=\"profile-section\">\n        <img src=\"".concat(URL.createObjectURL(profileImage), "\" alt=\"Profile Image\" width=\"100\" height=\"100\">\n        <h2>").concat(name, "</h2>\n        <p>").concat(email, " | ").concat(phone, "</p>\n    </div>\n    <hr>\n    <section>\n        <h3>Education</h3>\n        <ul>\n            <li><b>Degree:</b> ").concat(degree, "</li>\n            <li><b>Institute:</b> ").concat(institute, "</li>\n            <li><b>Duration:</b> ").concat(duration, "</li>\n        </ul>\n    </section>\n    <section>\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    </section>\n    <section>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    </section>\n</div>\n\n");
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

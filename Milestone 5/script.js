var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-preview');
var downloadPdfButton = document.getElementById('download-pdf');
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
    var resumeHTML = "\n<div class=\"resume-container\">\n    <h1>Resume Download</h1>\n    <div class=\"profile-section\">\n        <img src=\"".concat(URL.createObjectURL(profileImage), "\" alt=\"Profile Image\" width=\"100\" height=\"100\">\n        <h2><span contenteditable=\"true\">").concat(name, "</span></h2>\n        <p><span contenteditable=\"true\">").concat(email, " | ").concat(phone, " </span></p>\n    </div>\n    <hr>\n    <section>\n        <h3>Education</h3>\n        <ul>\n            <li><b>Degree:</b><span contenteditable=\"true\"> ").concat(degree, "</span></li>\n            <li><b>Institute:</b><span contenteditable=\"true\"> ").concat(institute, "</span></li>\n            <li><b>Duration:</b> <span contenteditable=\"true\">").concat(duration, "</span></li>\n        </ul>\n    </section>\n    <section>\n        <h3>Skills</h3>\n        <ul>\n            <span contenteditable=\"true\">").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</span>\n        </ul>\n    </section>\n    <section>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n    </section>\n</div>\n\n"); // Handle Download Button
    downloadPdfButton.addEventListener('click', function () {
        window.print();
    });
    // Display Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});

var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // Create resume output with editable fields
    var resumeHtml = "\n    <h2>Resume</h2>\n    <p>Name: <span id=\"editName\" contentEditable=\"true\">".concat(name, "</span></p>\n    <p>Email: <span id=\"editEmail\" contentEditable=\"true\">").concat(email, "</span></p>\n    <p>Phone: <span id=\"editPhone\" contentEditable=\"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <div id=\"editEducation\" contentEditable=\"true\">").concat(education, "</div>\n    <h3>Skills</h3>\n    <div id=\"editSkills\" contentEditable=\"true\">").concat(skills, "</div>\n    <h3>Experience</h3>\n    <div id=\"editExperience\" contentEditable=\"true\">").concat(experience, "</div>\n  ");
    // Display the resume
    resumeOutput.innerHTML = resumeHtml;
});

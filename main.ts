const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

resumeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //  form data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

  // Create resume output with editable fields
  const resumeHtml = `
    <h2>Resume</h2>
    
    <p>Name: <span id="editName" contentEditable="true">${name}</span></p>
    <p>Email: <span id="editEmail" contentEditable="true">${email}</span></p>
    <p>Phone: <span id="editPhone" contentEditable="true">${phone}</span></p>
    <h3>Education</h3>
    <div id="editEducation" contentEditable="true">${education}</div>
    <h3>Skills</h3>
    <div id="editSkills" contentEditable="true">${skills}</div>
    <h3>Experience</h3>
    <div id="editExperience" contentEditable="true">${experience}</div>
  `;

  // Display resume
  resumeOutput.innerHTML = resumeHtml;
});
function updateCard(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Get values from the form fields
    const schoolName = document.getElementById('schoolNameVal').value;
    const studentName = document.getElementById('studentName').value;
    const dob = document.getElementById('dob').value;
    const studentClass = document.getElementById('class').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const profilePhoto = document.getElementById('profilePhoto').files[0];

    // Update the display section with the values
    document.getElementById('schoolName').textContent = schoolName;
    document.getElementById('displayStudentName').textContent = `Student Name: ${studentName}`;
    document.getElementById('displayDob').textContent = `Date of Birth: ${dob}`;
    document.getElementById('displayClass').textContent = `Class: ${studentClass}`;
    document.getElementById('displayRollNumber').textContent = `Roll Number: ${rollNumber}`;
    document.getElementById('displayContactNumber').textContent = `Contact Number: ${mobileNumber}`;

    // Update profile photo if a new file is selected
    if (profilePhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('displayProfilePhoto').src = e.target.result;
        };
        reader.readAsDataURL(profilePhoto);
    }
}

function printCard(){
    window.print();
}
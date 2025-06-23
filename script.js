// Register Form
 function fun() {
    var Rollno = document.getElementById("Roll").value.trim();
    var ourname = document.getElementById("Name").value.trim();
    var fname = document.getElementById("fname").value.trim();
    var mobile = document.getElementById("Mobile").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var course = document.getElementById('course').value;
    var city = document.getElementById("City").value.trim();
    var address = document.getElementById("Address").value.trim();

    var student = {
        emailpattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        namepattern: /^[a-zA-Z ]{3,30}$/,
        passwordpattern: /^[a-zA-Z0-9,@.-_]{3,20}$/,
        addresspattern: /^[a-zA-Z0-9\s,.-]{5,100}$/,
    };

    if (isNaN(Rollno)) {
        alert("Invalid Roll Number.");
        return false;
    }

    if (!student.namepattern.test(ourname)) {
        alert("Invalid Student Name.");
        return false;
    }

    if (!student.namepattern.test(fname)) {
        alert("Invalid Father's Name.");
        return false;
    }

    if (isNaN(mobile)) {
        alert("Invalid Mobile Number.");
        return false;
    }

    if (!student.emailpattern.test(email)) {
        alert("Invalid Email.");
        return false;
    }

    if (!student.passwordpattern.test(password)) {
        alert("Invalid Password.");
        return false;
    }

    if (!student.namepattern.test(city)) {
        alert("Invalid City.");
        return false;
    }

    if (!student.addresspattern.test(address)) {
        alert("Invalid Address.");
        return false;
    }

    document.write("Roll No. : " + Rollno + "<br>");
    document.write("Name : " + ourname + "<br>");
    document.write("Father's Name : " + fname + "<br>");
    document.write("Mobile No. : " + mobile + "<br>");
    document.write("Email : " + email + "<br>");
    document.write("Password : " + password + "<br>");
    document.write("Course : " + course + "<br>");
    document.write("City : " + city + "<br>");
    document.write("Address : " + address + "<br>");
}
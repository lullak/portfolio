function validateForm() {
    const form = document.forms["contact"];

    const name = form["name"].value.trim();
    const phone = form["phone"].value.trim();
    const email = form["email"].value.trim();
    const message = form["message"].value.trim();

    if (name === "") {
        alert("Enter your name.");
        return false;
    }
    if (!/^\+?\d{10,15}$/.test(phone)) {
        alert("Enter your phone number country code with + can be included.");
        return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert("Enter a valid email address.");
        return false;
    }
    if (message === "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}

function contactForm() {
    var name = document.getElementById("Your Name").value;
    var email = document.getElementById("Your Email").value;
    var message = document.getElementById("Your Message").value;

    var whatsappUrl = "https://wa.me/917082579327?text=" 
       + "Name: " + name + "%0a" 
        +"Email: " + email + "%0" 
       + "Message: " + message;

    window.open(whatsappUrl, "_blank").focus();
};
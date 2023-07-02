
function Homeloan() {
    var name = document.getElementById("clientName").value
    var mobile = document.getElementById("mobile").value
    var profession = document.getElementById("profession").value
    var annualIncome = document.getElementById("annualIncome").value
    var pan = document.getElementById("pan").value
    var existingEmi = document.getElementById("existingEmi").value
    var jobLocation = document.getElementById("jobLocation").value
    var loanAmount = document.getElementById("loanAmount").value
    var loanLocation = document.getElementById("loanLocation").value
    var clientLocation = document.getElementById("clientLocation").value
    var partnerCode = document.getElementById("partnerCode").value
    var partnerContactNumber = document.getElementById("partnerContactNumber").value


    var whatsappur = "https://wa.me/919849811706?text="
        + "Name Of Customer: " + name + "%0a"
        + "Mobile Number: " + mobile + "%0a"
        + "Profession: " + profession + "%0a"
        + "Annual Income: " + annualIncome + "%0a"
        + "Pan: " + pan + "%0a"
        + "Existing EMI: " + existingEmi + "%0a"
        + "Job Location: " + jobLocation + "%0a"
        + "loan Amount: " + loanAmount + "%0a"
        + "loan Location: " + loanLocation + "%0a"
        + "Client Location: " + clientLocation + "%0a"
        + "Partner Name: G Gnanesh" + "%0a"
        + "Partner Code: " + partnerCode + "%0a"
        + "Partner Contact Number: " + partnerContactNumber;

    window.open(whatsappur, "_blank").focus();
};


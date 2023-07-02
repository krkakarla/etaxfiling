
function Eduloan() {
    var name = document.getElementById("ClientName").value
    var mobile = document.getElementById("Mobile").value
    var EmailID = document.getElementById("MailID").value
    var pan = document.getElementById("Pan").value
    var EducationQualification = document.getElementById("EducationQualification").value
    var Studycountry = document.getElementById("Studycountry").value
    var LoanType = document.getElementById("Loantype").value
    var loanAmount = document.getElementById("Loanamountrequired").value
    var loanLocation = document.getElementById("loanLocation").value
    var ICICIBankAccountNumber = document.getElementById("ICICIbankaccountnumber").value
    var ParentName = document.getElementById("PName").value
    var ParentAnnualIncome = document.getElementById("pannualincome").value
    var Parentmobile = document.getElementById("pmobile").value
    var partnerCode = document.getElementById("partnerCode").value
    var partnerContactNumber = document.getElementById("partnerContactNumber").value

    var whatsappur = "https://wa.me/919849811706?text="
        + "Name Of Customer: " + name + "%0a"
        + "Mobile Number: " + mobile + "%0a"
        + "Email ID: " + EmailID + "%0a"
        + "Pan: " + pan + "%0a"
        + "Education Qualification: " + EducationQualification + "%0a"
        + "Study Country: " + Studycountry + "%0a"
        + "Loan Type: " + LoanType + "%0a"
        + "Loan Amount: " + loanAmount + "%0a"
        + "Loan Location: " + loanLocation + "%0a"
        + "ICICI Bank Account Number: " + ICICIBankAccountNumber + "%0a"
        + "Parent Name: " + ParentName + "%0a"
        + "Parent Annual Income: " + ParentAnnualIncome + "%0a"
        + "Parent Mobile: " + Parentmobile + "%0a"
        + "Partner Name: G Gnanesh" + "%0a"
        + "Partner Code: " + partnerCode + "%0a"
        + "Partner Contact Number: " + partnerContactNumber;

    window.open(whatsappur, "_blank").focus();
};


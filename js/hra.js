function hciti() {
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var hciti1



    if (rd1.checked == true)
        hciti1 = rd1.value;
    /*    alert("The chennel selected is:" + rd1.value); */
    else if (rd2.checked == true)
        hciti1 = rd2.value;
    /* alert("The channel selected is :" + rd2.value); */
    else
        hciti1 = "There is no value";
    return hciti1;
    alert("No Chaneek selected");
};

function HRACAL() {
    var basal = Number(document.getElementById("basicsalary").value);
    var HRALL = Number(document.getElementById("HRAAllowance").value);
    var ehour = Number(basal * 0.10);
    var basicper = Number(basal * 0.50);
    var basicfor = Number(basal * 0.40);
    var hciti2 = hciti();

    alert("No Chaneek selected");

    if (hciti2 == "MetroCity" && basicper <= HRALL)
        return Number(basicper + ehour);
    else if (hciti2 == "MetroCity" && basicper >= HRALL)
        return Number(HRALL + ehour);
    else if (hciti2 == "NonMetro" && basicfor <= HRALL)
        return Number(basicfor + ehour);
    else if (hciti2 == "NonMetro" && basicfor >= HRALL)
        return Number(HRALL + ehour);

};
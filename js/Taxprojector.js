/*function Taxamountold() {
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var hciti1

    if (rd1.checked == true)
        hciti1 = rd1.value;
    /*    alert("The chennel selected is:" + rd1.value); */
  /*  else if (rd2.checked == true)
        hciti1 = rd2.value;
    /* alert("The channel selected is :" + rd2.value); */
  /*  else
        hciti1 = "There is no value";
    return hciti1;
    alert("No Chaneek selected");
};

function Taxamountnew() {
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var hciti1

    if (rd1.checked == true)
        hciti1 = rd1.value;
    /*    alert("The chennel selected is:" + rd1.value); */
   /* else if (rd2.checked == true)
        hciti1 = rd2.value;
    /* alert("The channel selected is :" + rd2.value); */
   /* else
        hciti1 = "There is no value";
    return hciti1;
    alert("No Chaneek selected");
};*/

function TAXCAL() {
    var basal = Number(document.getElementById("basicsalarysec").value);
    var HRALL = Number(document.getElementById("HRAAllowancesec").value);
    var deduct80c = Number(document.getElementById("80CDeduction").value);
    var deduct80ccd= Number(document.getElementById("80CCDDeduction").value);
    var deduc80CCD2 = Number(document.getElementById("80CCD2Deduction").value);
    var deduc80D = Number(document.getElementById("80DDeduction").value);
    var deduc80EEA = Number(document.getElementById("80EEADeduction").value);
    var Taxamountold = basal-HRALL-deduct80c-deduct80ccd-deduc80CCD2-deduc80D-deduc80EEA;
    var Taxamountnew = basal;
    var tax_amt;
    var tax_amt2;

   if (Taxamountold > 1000001){tax_amt = 112500+0.30*(Taxamountold-1000000);}
    else if (Taxamountold >= 500001 && Taxamountold <=1000000){
        tax_amt = 12500 + 0.20*(Taxamountold-500000);}
      else if (Taxamountold <= 500001 && Taxamountold >=250000){
      tax_amt = (Taxamountold-250000)*0.05;}
      else (tax_amt = 0);

       if (Taxamountnew > 2400000){tax_amt2 = 300000+0.30*(Taxamountnew-2400000);}
        else if (Taxamountnew >= 2000000 && Taxamountnew <=2400000){tax_amt2 = 200000 + 0.25*(Taxamountnew-2000000);}
          else if (Taxamountnew >=1600001 && Taxamountnew <= 2000001){tax_amt2 = 120000 + 0.20*(Taxamountnew-1600000);}
          else if (Taxamountnew >=1200001 && Taxamountnew <= 1600000){tax_amt2 = 60000 + 0.15*(Taxamountnew-1200000);}
          else if (Taxamountnew >=800001 && Taxamountnew <= 1200000){tax_amt2 = 20000 + 0.10*(Taxamountnew-800000);}
          else if (Taxamountnew >=400001 && Taxamountnew <= 800000){tax_amt2 = 0 + 0.05*(Taxamountnew-400000);}
          else (tax_amt2 = 0);
     ///  return tax_amt;
           alert("Projected tax amount as per old regime" + " " +" "+tax_amt+ " " + " and projected tax amount as per new regime "+ " " +tax_amt2+" "+"Thanks for utilizing this services");
    //return Taxamountold ;
    //var Taxamountnew = Taxamountnew();

};

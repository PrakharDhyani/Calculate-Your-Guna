var raj = 0;
var tam = 0;
var sat = 0;
var btn = document.getElementById("btn");
var midContainer = document.getElementsByClassName("midContainer");
var FName=document.getElementsByClassName("FName")[0];
var LName=document.getElementsByClassName("LName")[0];
var details=document.getElementsByClassName("details");
var output = document.getElementsByClassName("output")[0];
FName.value = "";
LName.value = "";

btn.addEventListener("click", checkAns);
function checkAns() {
  midContainer[0].style.display = "none";
  var name = FName.value;
  name += " ";
  name += LName.value;
  details[0].style.display = "none";
  console.log(output);
  output.style.display = "block";
  var selectedAns = document.querySelectorAll(".questions");
  for (var i = 0; i < 10; i++) {
    var one = selectedAns[i];
    var ele = document.getElementsByName("q" + (i + 1));
    for (var j = 0; j < ele.length; j++)
    {
      if (ele[j].checked) {
        CalculateResult(ele[j]);
      }
    }
  }
  raj = (raj / 35) * 100;
  tam = (tam / 35) * 100;
  sat = (sat / 35) * 100;
  console.log(raj);
  console.log(tam);
  console.log(sat);
}

function CalculateResult(num) {
  var questionNum = num.name + "";
  if (num.value == "raj") {
    raj++;
  } else if (num.value == "tam") {
    tam++;
  } else if (num.value == "raj") {
    sat++;
  }
}

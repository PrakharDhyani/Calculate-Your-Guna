var raj = 0;
var tam = 0;
var sat = 0;
var btn = document.getElementById("btn");

btn.addEventListener("click", checkAns);
function checkAns() {
  var selectedAns = document.querySelectorAll(".questions");
  for (var i = 0; i < 10; i++) {
    var one = selectedAns[i];
    var ele = document.getElementsByName("q" + (i + 1));
    // console.log(ele);
    for (var j = 0; j < ele.length; j++) {
      if (ele[j].checked) {
        CalculateResult(ele[j]);
      }
    }
  }
  raj = (raj / 10) * 100;
  tam = (tam / 10) * 100;
  sat = (sat / 10) * 100;
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

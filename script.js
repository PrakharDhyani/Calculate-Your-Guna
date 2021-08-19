var answers =
{
    q1: "Option1",
    q2: "Option1",
    q3: "Option1",
    q4: "Option1",
    q5: "Option1",
    q6: "Option1",
    q7: "Option1",
    q8: "Option1",
    q9: "Option1",
    q10: "Option1",
};
var raj = 0;
var tam = 0;
var sat = 0;
var btn = document.getElementById("btn");
btn.addEventListener("click", checkAns);
function checkAns() {
    var selectedAns = document.querySelectorAll(".questions");
    for (var i = 0; i < 10; i++) {
        var one = selectedAns[i];
        var ele = document.getElementsByName('q' + (i + 1));
        // console.log(ele);
        for (var j = 0; j < ele.length; j++) {
            if (ele[j].checked) {
                CalculateResult(ele[j]);
            }
        }
    }
    
}

function CalculateResult(num) {
    var questionNum = num.name+"";
    if (num.value=="raj") {
        raj++;
    }
    else if (num.value=="tam") {
        tam++;
    }
   else if (num.value=="raj") {
        sat++;
    }
}
function calculate() {
  var firstvalueinput = document.getElementById("first-value");
  var secondvalueinput = document.getElementById("second-value");
  var operation = document.getElementById("operation-type");

  if (operation.value.trim() === "") {
    alert("Please select an input type");
  } else {
    if (operation.value.trim() === "1") {
      var result = firstvalueinput + secondvalueinput;
      alert(result);
    }
    if (operation.value.trim() === "2") {
      var result2 = firstvalueinput - secondvalueinput;
      alert(result2);
    }
    if (operation.value.trim() === "3") {
      var result3 = firstvalueinput / secondvalueinput;
      alert(result3);
    }
    if (operation.value.trim() === "4") {
      var result4 = firstvalueinput * secondvalueinput;
      alert(result4);
    }
  }
}

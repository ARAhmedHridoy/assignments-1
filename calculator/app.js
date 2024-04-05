function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultContainer = document.getElementById('result');
    var result;

    if (isNaN(num1) || isNaN(num2)) {
      resultContainer.innerHTML = '<span class="text-danger">Please enter valid numbers.</span>';
      return;
    }

    switch (operation) {
      case 'addition':
        result = num1 + num2;
        break;
      case 'subtraction':
        result = num1 - num2;
        break;
      case 'multiplication':
        result = num1 * num2;
        break;
      case 'division':
        if (num2 === 0) {
          resultContainer.innerHTML = '<span class="text-danger">Division by zero is not allowed.</span>';
          return;
        }
        result = num1 / num2;
        break;
      default:
        resultContainer.innerHTML = '<span class="text-danger">Invalid operation.</span>';
        return;
    }

    resultContainer.innerHTML = '<span class="text-success">' + result + '</span>';
  }
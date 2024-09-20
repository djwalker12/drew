(function () {
    let results = [];

    // Created this function to have it calculated based on the operator
    function calculate(x, y, operator) {
        switch (operator) {
            case '+': return x + y;
            case '-': return x - y;
            case '*': return x * y;
            case '/': return y !== 0 ? x / y : 'ERROR -- Division by Zero';
            case '%': return x % y;
            default: return 'ERROR -- Invalid Operator';
        }
    }

    while (true) {
        
        // This is here to get input from the user
        let x = prompt('Enter First Number Below (or click Cancel to Exit)');
        if (x === null) break;
        x = parseFloat(x);

        let operator = prompt('Enter Operator (+, -, *, /, %)');
        if (operator === null) break;

        let y = prompt('Enter Second Number Below');
        if (y === null) break;
        y = parseFloat(y);

        // This handles invalid input
        if (isNaN(x) || isNaN(y)) {
            alert('ERROR -- Invalid Input');
            continue;
        }

        // This calculates the result
        // Also displays the table row
        let result = calculate(x, y, operator);
        results.push(result);
        console.log(`Number 1: ${x}, Operator: ${operator}, Number 2: ${y}, Result: ${result}`);
        document.write("<table>");
        document.write("<tr><th>Number x</th><th>Operator</th><th>Number y</th><th>Result</th></tr>");
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
        document.write("</table>");
    }

    // This is here to calculate the summaries
    // Then displays it
    let validResults = results.filter(r => typeof r === 'number');
    if (validResults.length > 0) {
        let min = Math.min(...validResults);
        let max = Math.max(...validResults);
        let total = validResults.reduce((acc, val) => acc + val, 0);
        let avg = total / validResults.length;
        document.write("<table>");
        document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
        document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
        document.write("</table>");
    }
})();



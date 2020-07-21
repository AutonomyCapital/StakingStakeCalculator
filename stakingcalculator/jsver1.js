function doFV() {

	// Get user input from the text field that has the id.
	var principal = parseFloat(document.getElementById('principal').value);
	var annualRate = parseFloat(document.getElementById('annualRate').value);
	var years = parseFloat(document.getElementById('years').value);


	// Call the function computeFutureValue(principal, annualRate, years, periodsPerYear)
	// and store the value returned by function in a variable
	var f = computeFutureValue(principal, annualRate, years);

	// Display the result
	document.getElementById('outputDiv').innerHTML = 'Future Value is ' + f + ' Stake ' ;
}


 function computeFutureValue(principal, annualRate, years) {

	// Compute and return the future value of an investment.
	var f = principal * Math.pow(1 + ( annualRate / 100 ) / 48, (years * 48));

	return f.toFixed(2);

}


	// Reset the form
function reset() {
	document.getElementById("resetForm").reset();
}

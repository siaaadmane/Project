
function firstPartClicked()		{
	let workHours = prompt("Enter the number of hours worked: ");
	let weeklyHours = 40;
	let hourlyWage = 15;

	if (workHours < weeklyHours)		{
		let earned = "In " + workHours + " hours you made $" + (workHours * hourlyWage);
		document.getElementById("firstOutput").innerHTML = earned;
	}                                                             
	else if (workHours > weeklyHours)	{  
		let overtimeHours = workHours - weeklyHours;
		let regPay = hourlyWage * weeklyHours;
		let overtimeWage = hourlyWage * 1.5;
		let overtimePay = overtimeWage * overtimeHours;
		                                         
		let earnedTotal = "In " + workHours + " hours you made $" + (regPay + overtimePay) + ". For the first 40 hours, you earned " + regPay + ". For the over time hours, you earned " + overtimePay;                            
		document.getElementById("firstOutput").innerHTML = earnedTotal;
	}                                                             
}
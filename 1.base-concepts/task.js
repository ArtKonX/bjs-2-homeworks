"use strict";

function solveEquation(a, b, c) {

	let arr;

	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant === 0) {
		arr = [];
		let root = -b / (2 * a);
		arr.push(Number(root.toFixed(2)));
	} else if (discriminant > 0) {
		arr = [];
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(Number(root1.toFixed(2)), Number(root2.toFixed(2)));
	} else {
		arr = [];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyInterestRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let payment = loanBody * (monthlyInterestRate + (monthlyInterestRate / (((1 + monthlyInterestRate) ** countMonths) - 1)));
	let totalAmount = Number((payment * countMonths).toFixed(2));
	return totalAmount;
}
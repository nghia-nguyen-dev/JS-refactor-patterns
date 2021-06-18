function calculate(number1, number2, operation) {
	const operations = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b,
	};

	return operations[operation]?.(number1, number2) ?? "invalid operation";
}

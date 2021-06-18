function getColor(fruit) {
	if (fruit.toLowerCase() === "apple") {
		return "red";
	} else if (fruit.toLowerCase() === "banana") {
		return "yellow";
	}
	if (fruit.toLowerCase() === "orange") {
		return "orange";
	}
	if (fruit.toLowerCase() === "blueberry") {
		return "blue";
	}
	if (fruit.toLowerCase() === "lime") {
		return "green";
	}

	return "unknown";
}

function getColor(fruit) {
	switch (fruit.toLowerCase()) {
		case "apple":
			return "red";
		case "banana":
			return "yellow";
		case "orange":
			return "orange";
		case "blueberry":
			return "blue";
		case "lime":
			return "green";
		default:
			return "unknown";
	}
}

function getColor(fruit) {
	const fruits = {
		apple: "red",
		banana: "yellow",
		orange: "orange",
		blueberry: "blue",
		lime: "green",
	};

	return fruits[fruit.toLowerCase()] || "unknown";
}

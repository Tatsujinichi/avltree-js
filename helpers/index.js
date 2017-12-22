function sortLeftToRight(a, b) {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	}
	return 0;
}

function calculateHeight(nodeA, nodeB) {
	if (nodeA === null) {
		if (nodeB === null) {
			return 1;
		} else {
			return nodeB.height + 1;
		}
	} else {
		if (nodeB === null) {
			return nodeA.height + 1;
		} else {
			return Math.max(nodeA.height, nodeB.height) + 1;
		}
	}
}

exports.sortLeftToRight = sortLeftToRight;
exports.calculateHeight = calculateHeight;
var helpers = require('../helpers');
var calculateHeight = helpers.calculateHeight;

function Node(element) {
	this.element = element;
	this.height = 1;
	this.left = null;
	this.right = null;
}
module.exports = Node;

Node.prototype.rightRotate = function () {
	var l = this.left;
	var lr = l.right;
	l.right = this;
	this.left = lr;
	this.height = calculateHeight(this.left, this.right);
	l.height = calculateHeight(l.left, l.right);
	return l;
};

Node.prototype.leftRotate = function () {
	var r = this.right;
	var rl = r.left;
	r.left = this;
	this.right = rl;
	this.height = calculateHeight(this.left, this.right);
	r.height = calculateHeight(r.left, r.right);
	return r;
};

Node.prototype.updateHeight = function () {
	this.height = calculateHeight(this.left, this.right);
};

Node.prototype.getBalance = function () {
	if (this !== null) {                                            // TODO: check null outside
		return this.right.height - this.left.height;
	}
	return 0;
};

Node.prototype.getTallestSubtree = function () {
	var balance = this.getBalance();
	if (balance < 0) {
		return this.left;
	}
	return this.right;
};

Node.prototype.balance = function (parent) {
	this.updateHeight();
	var balance = this.getBalance();
	if (balance < -1) {
		var z = this;
		var y = this.left;
		var x = y.getTallestSubtree();
		var newRoot = this._triNodeRestructure(x, y, z, parent);
		z.updateHeight();
		x.updateHeight();
		y.updateHeight();
		return newRoot;
	} else if (balance > 1) {
		var z = this;
		var y = this.right;
		var x = y.getTallestSubtree();
		var newRoot = this._triNodeRestructure(x, y, z, parent);
		z.updateHeight();
		x.updateHeight();
		y.updateHeight();
		return newRoot;
	}
	this.updateHeight();
	// TODO: probably was supposed to return newRoot, but was returning node?!
};

Node.prototype.getMin = function () {
	if (this.left === null) {
		return this;
	}
	return this.getMin(this.left);
};

Node.prototype.getMax = function () {
	if (this.right === null) {
		return this;
	}
	return this.getMax(this.right);
};
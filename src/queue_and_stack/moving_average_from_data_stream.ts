class MovingAverage {
	queue: number[] = [];
	constructor(public size: number) {
		this.size = size;
	}

	next(val: number): number {
		if (this.queue.length === this.size) this.queue.shift();
		this.queue.push(val);
		return this.queue.reduce((acc, cur) => acc + cur) / this.queue.length;
	}
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

// Input
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// Output
// [null, 1.0, 5.5, 4.66667, 6.0]
//
// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

class MovingAverage {
  queue: number[] = [];
  constructor(public size: number) {
    this.size = size;
  }

  next(val: number): number {
    if (this.queue.length === this.size) this.queue.shift();
    this.queue.push(val);
    return this.queue.reduce((acc, cur) => acc + cur, 0) / this.queue.length;
  }
}

'use strict';
class Rectangle {
	#width;
	#height;

	setWidth(width) {
		this.#width = width;
	}

	setHeight(height) {
		this.#height = height;
	}

	getArea() {
		let area = this.#width * this.#height;
		return area;
	}

	getPerimeter() {
		let perimeter = 2 * (this.#width + this.#height);
		return perimeter;
	}
	
	getRatio() {
		let ratio = this.getArea()/this.getPerimeter();
		return ratio;
	}
}

let rectangle = new Rectangle;
rectangle.setWidth(2);
rectangle.setHeight(2);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.getRatio());
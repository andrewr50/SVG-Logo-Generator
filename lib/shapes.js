class Triangle {
    constructor(data) {
        this.text = ``;
        this.shape = ``;
    }

    setSVG(text, textColor, shapeColor) {
        this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        console.log(this.text);
        this.shape = `<circle cx="150" cy="100" r="80" fill="${shapeColor}"></circle>`;
        console.log(this.shape);
    } 

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    };

}

class Square {
    constructor() {
        this.text = ``;
        this.shape = ``;
    }

    setSVG(text, textColor, shapeColor) {
        this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        console.log(this.text);
        this.shape = `<circle cx="150" cy="100" r="80" fill="${shapeColor}"></circle>`;
        console.log(this.shape);
    } 

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    };

}

class Circle {
    constructor(data) {
        this.text = ``;
        this.shape = ``;
    }

    setSVG(text, textColor, shapeColor) {
        this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        console.log(this.text);
        this.shape = `<circle cx="150" cy="100" r="80" fill="${shapeColor}"></circle>`;
        console.log(this.shape);
    } 

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    };

}



module.exports = {Triangle, Square, Circle};

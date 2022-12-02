//Задача 1

function parseCount(value) {
    const number = Number.parseInt(value)
    if (number) {
        return number
    }
    if (isNaN(number)) {
        throw new Error("Невалидное значение") //выбрасываем ошибку если значение не является числом
    }
}

function validateCount(value) {
    try {
        return parseCount(value)
    }
    catch (error) {
        return error //возвращаем ошибку в случае прехвата исключения
    }
}

//Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
        if ((this.a + this.b) < this.c || (this.b + this.c) < this.a ||
            (this.a + this.c) < this.b) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c
    }
    getArea() {
        let halfPerimeter = this.getPerimeter() / 2
        let areaTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))
        return +areaTriangle.toFixed(3)
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}
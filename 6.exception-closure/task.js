const parseCount = (arr) => {
  const result = parseInt(arr, 10);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  } else {
    return result;
  }
};

const validateCount = (arr) => {
  try {
    return parseCount(arr);
  } catch (error) {
    return error;
  }
};

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    if (
      firstSide + secondSide > thirdSide &&
      firstSide + thirdSide > secondSide &&
      secondSide + thirdSide > firstSide
    ) {
      this.firstSide = firstSide;
      this.secondSide = secondSide;
      this.thirdSide = thirdSide;
    } else {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    if (this.firstSide) {
      return this.firstSide + this.secondSide + this.thirdSide;
    } else {
      throw new Error('Ошибка! Треугольник не существует');
    }
  }

  getArea() {
    if (this.firstSide) {
      const halfPerimetr = this.getPerimeter() / 2;
      const area = Math.sqrt(
        halfPerimetr *
          (halfPerimetr - this.firstSide) *
          (halfPerimetr - this.secondSide) *
          (halfPerimetr - this.thirdSide)
      );
      return Number(area.toFixed(3));
    } else {
      throw new Error('Ошибка! Треугольник не существует');
    }
  }
}

const getTriangle = (firstSide, secondSide, thirdSide) => {
  try {
    return new Triangle(firstSide, secondSide, thirdSide);
  } catch (error) {
    return error;
  }
};

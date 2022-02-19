const parseCount = (arr) => {
  const result = parseInt(arr, 10);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
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
      firstSide + secondSide < thirdSide ||
      firstSide + thirdSide < secondSide ||
      secondSide + thirdSide < firstSide
    ) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }

  getPerimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }

  getArea() {
    const halfPerimetr = this.getPerimeter() / 2;
    const area = Math.sqrt(
      halfPerimetr *
        (halfPerimetr - this.firstSide) *
        (halfPerimetr - this.secondSide) *
        (halfPerimetr - this.thirdSide)
    );
    return Number(area.toFixed(3));
  }
}

const getTriangle = (firstSide, secondSide, thirdSide) => {
  try {
    return new Triangle(firstSide, secondSide, thirdSide);
  } catch {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      getArea() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
};

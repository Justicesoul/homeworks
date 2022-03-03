// Задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return (this.state = this.state * 1.5);
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(...arr) {
    super(...arr);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, ...arr) {
    super(...arr);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(...arr) {
    super(...arr);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(...arr) {
    super(...arr);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'detective';
  }
}

// Задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findBook = this.books.find((book) => book[type] === value);
    if (findBook) {
      return findBook;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    const findBookIndex = this.books.findIndex((item) => item.name == bookName);
    let bookToReturn = null;
    if (findBookIndex >= 0) {
      bookToReturn = this.books[findBookIndex];
      this.books.splice(findBookIndex, 1);
    }
    return bookToReturn;
  }
}

const library = new Library('Библиотека имени Ленина');

library.addBook(
  new DetectiveBook(
    'Артур Конан Дойл',
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
  )
);
library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));
library.addBook(new NovelBook('Герман Гессе', 'Демиан', 1919, 400));

library.giveBookByName('Машина времени');
library.books[0].fix();

library.findBookBy('name', 'Властелин колец');
library.findBookBy('author', 1919);

// Задача №3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  addMark(mark, subjectName) {
    if (this.marks === undefined) {
      this.marks = {};
    }
    if (this.marks[subjectName] === undefined) {
      this.marks[subjectName] = new Array();
    }
    if (mark < 1 || mark > 5) {
      return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
    } else {
      this.marks[subjectName].push(mark);
    }
  }

  getAverageBySubject(subjectName) {
    let sum = 0;
    let newArr = this.marks[subjectName];

    for (let i = 0; i < newArr.length; i++) {
      sum += +newArr[i];
    }
    return sum / newArr.length;
  }

  getAverage() {
    let allMarks = [];
    for (let key in this.marks) {
      let arr = this.marks[key];
      allMarks.push(...arr);
    }
    let sum = 0;
    for (let i = 0; i < allMarks.length; i++) {
      sum += +allMarks[i];
    }
    return sum / allMarks.length;
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}
let Ivan = new Student('Ivan', 'men', 34);
let Anna = new Student('Anna', 'women', 29);
let Losash = new Student('Losash', 'men', 2);

Ivan.addMark(3, 'algebra');
Ivan.addMark(5, 'algebra');
Ivan.addMark(5, 'history');
Ivan.addMark(5, 'history');
console.log(Ivan.getAverageBySubject('algebra'));
console.log(Ivan.getAverage());

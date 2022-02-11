function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  return (this.subject = subjectName);
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
  return this.marks;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks = this.marks.concat(marks);
  }
  return this.marks;
};

Student.prototype.getAverage = function () {
  const sum = this.marks.reduce((a, b) => a + b, 0);
  const average = sum / this.marks.length;
  return average;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  return (this.excluded = reason);
};

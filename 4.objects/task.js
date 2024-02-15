function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if(this.marks === undefined){
        return 'Невозможность добавлять оценки отчисленному студенту';
    } else{
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0){
        return 0;
    }

    return this.marks.reduce((acc, number) => acc + number) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
// Задача 1. Печатное издание

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix(){
        this.state = this._state * 1.5;
    }

    set state(value){
        if (value < 0){
            this._state = 0;
        }
        else if (value > 100){
            this._state = 100;
        }
        else{
            this._state = value;
        }
    }

    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2. Библиотека

class Library{
    constructor(name, books=[]){
        this.name = name;
        this.books = books;
    }

    addBook(book){
        if (book._state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        const findBook = this.books.find(elem => elem[type] === value);
        return findBook === undefined ? null : findBook;
    }

    giveBookByName(bookName){
        const findBook = this.books.find(elem => elem.name === bookName);
        this.books = this.books.filter(elem => elem.name !== bookName);
        return findBook === undefined ? null : findBook;
    }
}

// Задача 3. Журнал успеваемости *

class Student{
    constructor(name){
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject){
        if ((mark < 2) || (mark > 5)){
            return "Неверное число для оценки"
        }

        if (this.marks[subject] === undefined){
            this.marks[subject] = [];
            this.marks[subject].push(mark)
        } else{
            this.marks[subject].push(mark);
        }

    }

    getAverageBySubject(subject){
        if (this.marks.hasOwnProperty(subject) !== true){
            return 0;
        }

        return this.marks[subject].reduce((acc, number) => acc + number) / this.marks[subject].length;

    }

    getAverage(){
        const keys = Object.keys(this.marks);
        if (keys.length === 0){
            return 0;
        }

        return keys.reduce((acc, number) => this.getAverageBySubject(acc) + this.getAverageBySubject(number)) / keys.length;
    }
}

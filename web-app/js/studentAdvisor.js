var Gender;
(function (Gender) {
    Gender["Male"] = "M";
    Gender["Female"] = "F";
})(Gender || (Gender = {}));
class Person {
    constructor(fName, lName, gen, cityName) {
        this.firstName = fName;
        this.lastName = lName;
        this.gender = gen;
        this.city = cityName;
    }
}
class Student extends Person {
    constructor(fName, lName, gen, cityName, majorParam, creditHours, grade) {
        super(fName, lName, gen, cityName);
        this.major = majorParam;
        this.creditHrs = creditHours;
        this.gpa = grade;
    }
}
class Advisor extends Person {
    constructor(fName, lName, gen, cityName, students) {
        super(fName, lName, gen, cityName);
        this.studentList = students;
    }
}

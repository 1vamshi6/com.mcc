enum Gender {
    Male = "M",
    Female = "F"
}

class Person {
    firstName: string;
    lastName: string;
    gender: Gender;
    city: string;

    constructor(fName: string, lName: string, gen: Gender, cityName: string){
        this.firstName=fName;
        this.lastName=lName;
        this.gender=gen;
        this.city=cityName;
    }
}

class Student extends Person {
    major: string;
    creditHrs: number;
    gpa: number;

    constructor(fName: string, lName: string, gen: Gender, cityName: string, 
                majorParam: string, creditHours: number, grade: number) {
        super(fName, lName, gen, cityName);
        this.major=majorParam;
        this.creditHrs=creditHours;
        this.gpa=grade;
    }
}

class Advisor extends Person {
    studentList: Student[];

    constructor(fName: string, lName: string, gen: Gender, cityName: string, 
                students: Student[]) {
        super(fName, lName, gen, cityName);
        this.studentList=students;
    }
}
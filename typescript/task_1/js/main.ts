interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number;
};

interface printTeacherFunction {
    (fistName: string, lastName: string): string;
};

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

class StudentClass implements StudentClassInterface {
    private readonly firstName: string;
    private readonly lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public workOnHomework(): string {
        return "Currently working";
    }

    public displayName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
};

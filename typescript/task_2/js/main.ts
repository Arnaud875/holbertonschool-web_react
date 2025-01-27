interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

class Director implements DirectorInterface {
    public workFromHome(): string { return "Working from home"; }
    public getCoffeeBreak(): string { return "Getting a coffee break"; }
    public workDirectorTasks(): string { return "Getting to director tasks"; }
};

class Teacher implements TeacherInterface {
    public workFromHome(): string { return "Cannot work from home"; }
    public getCoffeeBreak(): string { return "Cannot have a break"; }
    public workTeacherTasks(): string { return "Getting to work"; }
};

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof(salary) === "string") {
        if (salary[0] == "$")
            salary.slice(1)
        salary = Number(salary);
    }

    return (salary < 500) ? new Teacher() : new Director();
};

function isDirector(employee: any) {
    return employee instanceof Director;
};

function executeWork(employee: Director | Teacher): string {
    if (employee instanceof Director)
        return employee.workDirectorTasks();
    else
        return employee.workTeacherTasks();
};

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    return (todayClass === "Math") ? "Teaching Math" : "Teaching History";
};

console.log(teachClass('Math'));
console.log(teachClass('History'));
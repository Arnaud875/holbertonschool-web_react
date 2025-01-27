interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'USA'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 23,
    location: 'Canada'
};

const studentsList: Array<Student> = [student1, student2];
const table = document.createElement("table");

const tr = document.createElement("tr");
tr.appendChild(document.createElement("th")).innerText = "First Name";
tr.appendChild(document.createElement("th")).innerText = "Location";

table.appendChild(tr);

for (const student of studentsList) {
    const tr = document.createElement("tr");

    const tdFirstName = document.createElement("td");
    const tdLocation = document.createElement("td");

    tdFirstName.innerText = student.firstName;
    tdLocation.innerText = student.location;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLocation);

    table.appendChild(tr);
}

document.body.appendChild(table);
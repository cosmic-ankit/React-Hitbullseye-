let studentList = [];

function addStudent(student) 
{
 studentList.push(student);
}

function removeStudent(index) 
{
    studentList.splice(index, 1);
}

function display()
{
    console.log(studentList);
}

display();

addStudent("Ankit");
addStudent("Aryan");
addStudent("YOLo");
addStudent("Hisenberg");

display();

removeStudent(2);

display();

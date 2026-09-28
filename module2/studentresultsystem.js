const students = [
    {
        name: "Aman",
        marks: 85
    },
    {
        name: "Rahul",
        marks: 72
    },
    {
        name: "Priya",
        marks: 93
    },
    {
        name: "Raj",
        marks: 45
    }
];
for(const student of students){
    if(student.marks>=90){
        console.log(`${student.name} ->  A`);
    }else if(student.marks>=80){
        console.log(`${student.name} -> B`);
    }else if(student.marks>=70){
        console.log(`${student.name} -> C`);
    }else if(student.marks>=60){
        console.log(`${student.name} -> D`);
    }else{
        console.log(`${student.name} -> F`);
    }
}
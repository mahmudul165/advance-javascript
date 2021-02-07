const student=[
   {id:1,Name:'Mahmud'},
   {id:2,Name:'Saima'},
   {id:3,Name:'Kasmi'}
]
/* const studentName=[];
   for (let index = 0; index < student.length; index++) {
   const element = student[index];
   console.log(element.Name); // just check property of the object
   studentName.push(element.Name)  
   }
   console.log(studentName); */



   // map
   const studentName=student.map(element=>element.Name)
   console.log(studentName);

   const studentId=student.map(x=>x.id)
   console.log(studentId);
// filter
const studentNam=student.filter(element=>element.Name === 'Saima')
console.log(studentNam);

const student_Id=student.filter(x=>x.id>1)
console.log(student_Id)

//find 
const student_name=student.find(x=>x.id>1)
console.log(student_name) 
 
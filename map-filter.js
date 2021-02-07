const array =[2,4,6,8];
//const newArray=[];
// for (x = 0; x < array.length; x++) {
//    const element = array[x];
//    const result = element*element;
//    newArray.push(result);
// }
// console.log(newArray);

//arrow 


// map give an array
const newArray=array.map(i=>i/2) 
console.log(newArray);


//filter give an array

const  filterArray=array.filter(x=> x>3)
console.log(filterArray);

// give an first conditional element from array
// when condition take '>' then give imidiate one value that fullfill the condition
//when take "<" then give lowest value element from an array
const findArray=array.find(y=> y < 8)
console.log(findArray);

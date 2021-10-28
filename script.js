// //Question no 2, 3 and 4 are in console



// // Question 1 starts 
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let principle_diagonal = 1;
let secondary_diagonal = 1;
let principle_diagonal_sum = 0;
let secondary_diagonal_sum = 0;

for (let row = 0; row < arr.length; row++) {
    principle_diagonal = (arr[row][row]) * (principle_diagonal);              
    secondary_diagonal = (arr[row][arr.length - row - 1]) * (secondary_diagonal);         
    principle_diagonal_sum = (arr[row][row]) + (principle_diagonal_sum);                
    secondary_diagonal_sum = (arr[row][arr.length - row - 1]) + (secondary_diagonal_sum);    
}
document.write("<h1 class='text-center'>Question no 1</h1>");
document.write("<br>Principle Diagonal Sum = ", +principle_diagonal_sum)
document.write("<br>Secondary Diagonal Sum = ", +secondary_diagonal_sum)
document.write("<br>Principle Diagonal Product = ", +principle_diagonal)
document.write("<br>Secondary Diagonal Product = ", +secondary_diagonal)
document.write("<h2><br> <br> <br> <br> Question no 2, 3 and 4 are in console</h2>");
// // Question 1 ends

// // Question 2 starts
let arr1 = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
]

let arr2 = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
]

let arr3 = [
    [, , ,],
    [, , ,],
    [, , ,],
    [, , ,]
]

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
            arr3[i][j] = arr1[i][j] * arr2[i][j];
        }
    }
}
console.log("Qustion no 2 :")
console.log(arr3);
// // Question 2 ends 

// //Question 3 starts
Object =
{
    parent_name: 'Father',
    child1: 'Sumair'
}
Array = ["Hamza", "Shahbaz", "Jahanzaib", "Junaid", "Tabish", "Ahtisham", "Asghar"]

console.log("Qustion no 3 :")
// console.log(Object);

for(var i=0;i<Array.length;i++){
    Object[i] = Array[i]
}
console.log(Object)

// //Question 3 ends

// //Question 4 starts
fetch('https://jsonplaceholder.typicode.com/users')
    .then((apidata) => {
        return apidata.json();
    }).then((data) => {
        console.log("Qustion no 4 :")
        console.log(data);
    })
// //Question 4 ends

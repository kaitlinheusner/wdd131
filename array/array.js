const steps =["one", "two", "three"];
function listTemplate(step){
    return `<li>${step}</li>`
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ["A", "B", "A"];
function convertGradeToNumber(grade) {
    let point = 0;
    if (grade === 'A') {
        point = 4;
    } else if (grade === 'B'){
        point = 3;
    }
    return point;
}

const gpaPoints = grades.map(convertGradeToNumber);
console.log("GPA points: " + gpaPoints);

const gpa = gpaPoints.reduce((total, item) => total + item) /gpaPoints.length;

console.log("GPA: " + gpa)

fruits = ["watermelon", "peach", "apple", "tomato"]
const shortWords = fruits.filter((word) => word.length < 6);
console.log(shortWords)

numbers = ["12", "34", "21", "54"]
const luckyNumber = 21;

let luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex)
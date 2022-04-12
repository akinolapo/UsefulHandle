const courseCode = document.querySelectorAll("input[type=checkbox]")
const grade = document.getElementsByClassName("grade")
const courseGrade = document.querySelectorAll("input[type=radio]")
const radioGrade = document.getElementsByClassName("grade")
const gradeName = document.querySelectorAll("input[type = radio]")
const submitValues = document.getElementById("submit_values")

const label = document.getElementsByTagName("label")

let selctedCourse = ""

// console.log(radioGrade.length)

// const csc101 = 2
// const chm101 = 4
// const chm103 = 1
// const tpd101 = 1
// const mth101 = 5
// const phy101 = 4
// const phy107 = 1


let courseUnit = 0
let totalGradePoint = 0
let gradePoint = 0
let coursePoint = 0


// Check if course code  is selected and display the corsponding radio input to select grade in course 

for (let i = 0; i < courseCode.length; i++) {
    courseCode[i].addEventListener("click", event => {
        if (event.target.checked) {
            if (courseCode[i].value === "csc101") {
                courseUnit = 2
                grade[i].style.display = "block"
            }
            else if(courseCode[i].value === "chm101"){
                courseUnit = 4
                grade[i].style.display ="block"
            }
            else if(courseCode[i].value === "chm103"){
                courseUnit = 1
                grade[i].style.display ="block"
            }
            else if(courseCode[i].value === "tpd101"){
                courseUnit = 1
                grade[i].style.display ="block"
            }
            else if(courseCode[i].value === "mth101"){
                courseUnit = 5
                grade[i].style.display ="block"
            }
            else if(courseCode[i].value === "phy101"){
                courseUnit = 4
                grade[i].style.display ="block"
            }
            else if(courseCode[i].value === "phy107"){
                courseUnit = 1
                grade[i].style.display ="block"
            }
            selctedCourse = courseCode[i].value
        } else {
            grade[i].style.display = "none"
        } return courseUnit
    })
}



// console.log(gradeName[0])

//check when a grade is selcted and run the fuction to get the grade point
for (let j = 0; j < gradeName.length; j++){
    // console.log(gradeName[j].value)
    gradeName[j].addEventListener("click", event => {
        if (event.target.checked){
            gradePointCalulation(gradeName[j].value)
            coursePoint = gradePoint * courseUnit
            totalGradePoint = coursePoint
        } return totalGradePoint    
    })

}


// Check the grade selected and assign grade point

function gradePointCalulation(gradePicked){

    if( gradePicked === "A"){
        gradePoint = 5
    } else if (gradePicked === "B"){
        gradePoint = 4
    } else if (gradePicked === "C"){
        gradePoint = 3
    } else if (gradePicked === "D"){
        gradePoint = 2
    } else if (gradePicked === "E"){
        gradePoint = 1
    } else{
        gradePoint = 0
    }
    return gradePoint
}




submitValues.addEventListener("click", function(){
   
    console.log(totalGradePoint)
})





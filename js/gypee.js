const submitValues = document.getElementById("submit_values")
const inputValues = document.getElementsByTagName("input")
const selectedOptions = document.getElementById("result")

let levelSemArrray = []

submitValues.addEventListener("click", function(){
    for(i = 0; i < inputValues.length; i++){
        if(inputValues[i].type = "radio"){
            if(inputValues[i].checked){
                levelSemArrray.push(inputValues[i].value)
                if (levelSemArrray[0] === "100" && levelSemArrray[1] === "first"){
                    location.href="/100LevelFirstSemester.html"
                } else if (levelSemArrray[0] === "100" && levelSemArrray[1] === "second"){
                    location.href="/100LevelSecondSemester.html"
                }
                
             }
         }
     }
  })




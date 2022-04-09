const submitValues = document.getElementById("submit_values")
const inputValues = document.getElementsByTagName("input")
const selectedOptions = document.getElementById("result")

submitValues.addEventListener("click", function(){
    for(i = 0; i < inputValues.length; i++){
        if(inputValues[i].type = "radio"){
            if(inputValues[i].checked){
                // selectedOptions.style.display="block"
                // selectedOptions.innerHTML += `<strong>${inputValues[i].name}</strong>: ${inputValues[i].value} <br>`
                location.href="/courses.html"
             }
         }
     }
  })




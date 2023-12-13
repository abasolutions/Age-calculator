const calcButton = document.getElementById("calculate");
calcButton.addEventListener("click", getBirthdate);

function getBirthdate(){
   const bDate = document.getElementById("birthDate").value;
  
   if (bDate === ""){
    alert("Please add your date of birth first!")
   }else{
    calculateAge();
   }

   function calculateAge(){
    const currentDate = new Date().getDate();
    const bDateDate = new Date(bDate).getDate();
    const currentDateYear = new Date().getFullYear();
    const currentDateMonth = new Date().getMonth() + 1;
    const bDateYear = new Date(bDate).getFullYear();
    const bDateMonth = new Date(bDate).getMonth() + 1;

    let age = currentDateYear - bDateYear;
    let month = currentDateMonth - bDateMonth;

    if (month < 0 || (month === 0 && currentDate < bDateDate)){
        age--;
    }
    const result = document.getElementById("result");
    result.innerText = `Your age is ${age}.`
}
}




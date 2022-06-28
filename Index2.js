let numberOne = document.getElementById("Primero");
let numberTwo = document.getElementById("Segundo");
let numberThree = document.getElementById("Tercero");
let numberFour = document.getElementById("Cuarto");

const btnValidate = document.getElementById("btnValidate");

btnValidate.addEventListener("click", () => {

    if(numberOne.value <= 0 || numberTwo.value <= 0 || numberThree.value <= 0 || numberFour.value <= 0 || numberOne.value == "" || numberTwo.value == "" || numberThree == "" || numberFour.value == ""){
        alert("Por favor ingresar números mayores a 0")
    }else{
        if(numberOne.value == numberTwo.value || numberOne.value == numberThree.value || numberOne.value == numberFour.value || numberTwo.value == numberThree.value || numberTwo.value == numberFour.value || numberThree.value == numberFour.value){
            alert("Por favor ingresar números diferentes")
        }else{
            let max = Math.max(numberOne.value, numberTwo.value, numberThree.value, numberFour.value);
            let min = Math.min(numberOne.value, numberTwo.value, numberThree.value, numberFour.value);

            alert("El número mayor es: " + max + " y el número menos es: " + min);
        }
    }
})


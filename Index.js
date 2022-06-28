let 
  materia = document.getElementById('Materia');
  materiasinscritas = [];
  boton = document.getElementById('boton');
  valormat = document.getElementById('valor');
  valormaterias = [];
  btncalcular = document.getElementById('btncalcular');
  sum = 0;

const lista = document.querySelector('#lista')
const listatotal = document.querySelector('#listatotal')

const  fragmenttotal = document.createDocumentFragment()

const  fragment = document.createDocumentFragment()
const  fragment2 = document.createDocumentFragment()

let i = 1

boton.addEventListener('click', ()=> {

    
    materiasinscritas.push(materia.value)
    valormaterias.push(valormat.value)
    console.log(materiasinscritas)
    const li = document.createElement('li')
    li.classList.add('list')
    const b = document.createElement('b')
    b.textContent = 'Materia ' + String(i) +': '
    const  span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = materia.value +'     $'+ valormat.value
   li.appendChild(b)
   li.appendChild(span)
   fragment.appendChild(li)
   lista.appendChild(fragment)
   i++
})

btncalcular.addEventListener('click', ()=> {
    for (let i = 0; i < valormaterias.length; i++) {
        sum = sum + Number(valormaterias[i]);
    }
    sum = (sum*0.8) + 28000
    console.log(sum);
    const litot = document.createElement('li')
    litot.classList.add('list')
    const btot = document.createElement('b')
    btot.textContent = 'Total con Descuento + Costo Fijo +Carné'+': '
    const  spantot = document.createElement('span')
    spantot.classList.add('text-danger')
    spantot.textContent = '$'+ sum
    litot.appendChild(btot)
    litot.appendChild(spantot)
    fragmenttotal.appendChild(litot)
    listatotal.appendChild(fragmenttotal)
   
})















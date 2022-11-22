const calcular = document.querySelector("#calcular")

  calcular.onclick = function(){

    const sueldo_anual = Number(document.querySelector("#salario_anual").value)

    let sueldo_mensual = sueldo_anual / 12

   document.querySelector("#salario_mensual").value = sueldo_mensual

   return false
  }
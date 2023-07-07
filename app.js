function calcularDiferenciaHamming(a1, a2) {
    if (a1.length != a2.length) {
      document.write("Los arreglos deben tener la misma longitud." + "<br>")
    }
  
    let diferencia = 0;
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        diferencia++;
      }
    }
  
    return diferencia;
  }
  
  let array1 = prompt("Ingrese el primer arreglo separado por comas (por ejemplo: 1,0,1,0,1)");
  array1 = array1.split(",")
  array1 = array1.map(Number);
  let array2 = prompt("Ingrese el segundo arreglo separado por comas (por ejemplo: 0,1,1,0,0)")
  array2 = array2.split(",")
  array2 = array2.map(Number);
  let dif = calcularDiferenciaHamming(array1, array2);

  document.write('Distancia de Hamming: ' + dif);
  

function findDifference(a, b) {
    //loading...
    const array =(b,c) => b*c;
    
    const resultado = (a.reduce(array) - b.reduce(array))
    if (resultado >0){
      return resultado 
    }else {
      
      return resultado*-1
    }
  }

  //https://www.codewars.com/kata/58cb43f4256836ed95000f97
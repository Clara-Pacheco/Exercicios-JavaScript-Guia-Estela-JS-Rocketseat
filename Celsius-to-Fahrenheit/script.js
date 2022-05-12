/*Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32 */

 //Creating function transformDegree
 
 function transformDegree(degree){

  //To verify if the temperature passed as argument is celsius or fahrenheit. 
   const celsiusExists = degree.toUpperCase().includes('C')
   const fahrenheitExists = degree.toUpperCase().includes('F')

  // To validade if the temperature passed as argument was correct. In case it does not have an "C" or a "F", it will throw an error message.

  //Error Flow
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Degree not identified')
  }

  //Ideal flow. Transformation from 'F' to 'C'
  //variable 'formule' that receives an arrow function that transforms fahrenheit to celsius. This arrow function will receive the temperature in fahrenheit as parameter and return the temperature in celsius.
  if(fahrenheitExists){

    let updatedDegree= Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 
    let degreeSign = 'C'

    return formula(updatedDegree) + 'C'
 }else{
    //Alternative flow- If the degree passed as parameter is in celsius, instead of fahrenheit
    updatedDegree= Number(degree.toUpperCase().replace("C", ""))
    formula = (celsius) => celsius * 9/5 + 32
    degreeSign = 'F'

    return formula(updatedDegree) + 'F'
}
  

  }

  try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('50Z')
  }catch(error){
    console.log(error.message)
  }
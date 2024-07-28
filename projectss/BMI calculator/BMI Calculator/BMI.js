const form = document.querySelector('form')
form.addEventListener('submit',function(calc){
    calc.preventDefault(); // to stop the submission of form details

   const height = parseInt(document.querySelector('#height').value);   
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#result');

   if(height < 0 || height === '' || isNaN(height)){
    result.innerHTML = 'Please enter a valid height';
   } 
   else if(weight < 0 || weight ==='' || isNaN(weight)) 
   {
   result.innerHTML = 'Please enter a valid weight';   
   } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

     result.innerHTML = `   <span> "Your BMI is ${bmi}"</span>`;
   }
});



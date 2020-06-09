$(document).ready(function() {
  $("form#prime-sifting").submit(function(event) {
    event.preventDefault();

    const limit = parseInt($("input#limit").val());
    
    let numList = [];
    for (let i = 2; i <= limit; i++) {
      numList.push(i);
    }

    const notPrimeArray = [];
    const primeArray = [];
    let testNum;
    
    for(let i=0; i<numList.length; i++) {
      testNum = numList[i];
      numList.forEach(function (element) {
        if (element % testNum === 0 && element != testNum) {
          notPrimeArray.push(element);
        } else if (element % testNum != 0 && element != testNum) {
          if(!primeArray.includes(element) && notPrimeArray.includes(element)) {
            primeArray.push(element);
          } else {
          
          }
        }
      });
    }
  console.log(primeArray);
  });
});
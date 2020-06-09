$(document).ready(function() {
  $("form#prime-sifting").submit(function(event) {
    event.preventDefault();

    const limit = parseInt($("input#limit").val());
    console.log(limit);
    
    let numList = [];
    for (let i = 2; i <= limit; i++) {
      numList.push(i);
    }

    console.log(numList);

    // numList.forEach(function (number) {
	
    // });

  });
});
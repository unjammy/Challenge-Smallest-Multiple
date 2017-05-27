/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  var i = 0;
  var bookkeeper = false;
  var smallest = 0;
  // var memoize = 0;

  // Rekting my computer with brute force method
  var multiples = function(){

    for( i = 1; i <= ceiling; i++){

      if( smallest % i === 0 ){
       bookkeeper = true;
      } else {
       bookkeeper = false;
      }

    }



    if( !bookkeeper ){

      smallest++;
      mutliples( smallest );

    } else{
      console.log("i have the value of..." +  smallest);
      return smallest;

    }
  };

  return multiples(ceiling);

};
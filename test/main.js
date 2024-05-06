 function calculateFactorial ( n ) { 
 try { 
    if ( typeof n !== ' number ' ) { 
    throw new Error ( 'Input must be a number ' ) ; 
    } 
    if ( n < 0 ) { 
    throw new Error ( 'Input must be a non - negative number ' ) ; 
    } 
    let result = 1 ; 
    for ( let i = 2 ; i <= n ; i ++ ) { 
    result *= i ; 
    // Break the loop if the result is not a f in ite number 
    if ( ! isF in ite ( result ) ) { 
     console.log ( 'The result is too large and cannot be represented accurately' ) ; 
     break ; 
    } 
    } 
    return result ; 
 } catch ( error ) { 
 console . error ( 'An error occurred : ' + error . message ) ; 
 } 
 } 

 console.log ( calculateFactorial ( 5 ) ) ; // Output : 1 2 0 
 console.log ( calculateFactorial ( 0 ) ) ; // Output : The result is too large and cannot be represented accurately
 console.log ( calculateFactorial ( - 1 ) ) ; // Output : An error occurred : Input must be a non - negative number 
 console.log ( calculateFactorial ( 'hello' ) ) ; // Output : An error occurred : Input must be a number 
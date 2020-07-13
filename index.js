function writeCards( array, event ) {
    let writeCards = []
    for ( let i = 0; i < array.length; i++ ) {
        writeCards.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!` )
    }
    return writeCards
  }
  
  function countDown(num) {
    while ( num > 0 ) {
      console.log( num );
      num -= 1;
    }
    console.log( num );
  }
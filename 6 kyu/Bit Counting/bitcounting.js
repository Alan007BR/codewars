var countBits = function(n) {
    let bin
    ones = 0
    
    bin = n.toString(2);
    console.log(bin)
    for(let n of bin) {
        if(n == 1) {
            ones++;
        }
    }

    return ones;
  };


console.log(countBits(6170057006));
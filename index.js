function produceDrivingRange(range) {
  return function (block1, block2) {
    let b1 = parseInt(block1.slice(0,2))
    let b2 = parseInt(block2.slice(0,2))
    let n = 0;
    b1<b2 ? n=b2-b1 : n=b1-b2;
    console.log(n)
    console.log(range)
    if (range < n){

      return `${n - range} blocks out of range`;
    }else {
      return `within range by ${range - n}`;
    }
  }
}

function produceTipCalculator(percentage) {
    return function(fare){

      return fare/(percentage*100)

    }
}

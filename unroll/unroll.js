//not done yet

//................. i give up!

const unroll = (arr) => {
  console.log('UNROLL!')
  console.table(arr)
  let unrolled = []

  let currX = 0
  let currY = 0
  
  let maxIndex = arr[0].length-1
    console.log(`start at x:${currX}, y:${currY}. maxindex ${maxIndex}`)
  
  // move right
  while(currY < maxIndex){
    console.log(`currently at x:${currX}, y:${currY}`)
    unrolled.push(arr[currX][currY])
    currY++
  }
  
  // move down
  while(currX < maxIndex){
    console.log(`currently at x:${currX}, y:${currY}`)
    unrolled.push(arr[currX][currY])
    currX++
  }

  // move left
  while(currY > 0) {
    console.log(`currently at x:${currX}, y:${currY}`)
    unrolled.push(arr[currX][currY])
    currY--
  }

  // move up
  while(currX > 0) {
    console.log(`currently at x:${currX}, y:${currY}`)
    unrolled.push(arr[currX][currY])
    currX--
  }

  console.log(`currently at x:${currX}, y:${currY}`)
  console.log(unrolled)
  
  return unrolled;
}

module.exports = unroll;

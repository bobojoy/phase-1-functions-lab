// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  const hq = 42;
  return Math.abs(blocks - hq);
}

function distanceFromHqInFeet(blocks) {
 const blockLengthInFeet = 264;
 ;

  // calculate the distance in blocks from headquarter in feet
  return distanceFromHqInBlocks(blocks) * blockLengthInFeet;
}

function distanceTravelledInFeet(start, destination) {
 const blockLengthInFeet = 264;
 
  const distanceInBlocks = Math.abs(destination - start);

  const distanceInFeet = distanceInBlocks * blockLengthInFeet;
  return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  let farePrice;

  if (distanceInFeet < 401) {
    farePrice = 0;
  } else if (distanceInFeet > 400 && distanceInFeet < 2001) {
    farePrice = (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2501) {
    farePrice = 25;
  } else if (distanceInFeet > 2500) {
    farePrice = "cannot travel that far";
  }

  return farePrice;
}

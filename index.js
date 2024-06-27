// Code your solution in this file!
//distanceFromHqInBlocks
function distanceFromHqInBlocks(block){
    return Math.abs(42-block);
}

//distanceFromHqInFeet
function distanceFromHqInFeet(block){
    return Math.abs(distanceFromHqInBlocks(block))*264;
}

//distanceTravelledInFeet
function distanceTravelledInFeet(start,desti){
    return Math.abs(start-desti)*264;
}

//calculatesFarePrice(start,destination)
function calculatesFarePrice(start,desti){
    const distance =distanceTravelledInFeet(start,desti)
        if (distance < 400){
            return 0;
        }
        else if (distance >=400 && distance <2000){
            return (distance -400) * .02
        }
        else if (distance >2000 && distance <2500){
            return 25;
        }
        else{
            return 'cannot travel that far';
        }


    }
        
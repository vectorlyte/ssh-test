const x = 123;
const y = 2;

const cars = [{name: "red car"}, 
{name: "blue car"}, {name: "yellow car"}];
const isFueled = true;

function gasStation() {
    let i = 0;
    do{
        if(isFueled){
            cars[i].isFueled = true;
            console.log(cars[i] + " is has a full tank of gas and is ready to go!");
        }
        i++;
    } while (i < cars.length)
}

gasStation();
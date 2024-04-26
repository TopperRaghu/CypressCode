// object litral
const employee = {
    Name:'Raghvendra',
    Age:27,
    City:'Buxar',
    Occupation:'DevOp'
};

console.log(employee.Name)
//Constructor function
function Car(Brand, Colour,Price){
    this.Brand=Brand
    this.Colour=Colour
    this.Price=Price
}

let carman=new Car("Bmw","Red",50);
console.log(carman.Brand+" "+carman.Colour+" "+carman.Price);
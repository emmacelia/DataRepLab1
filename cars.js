//Vehicle Class
class vehicle{

//creates a constructor
constructor(Make, Model, Year){
this.Make = Make;
this.Model = Model;
this.Year = Year;

}
//creates a method called information that outputs the values
Information(){
console.log(`make ${this.Make}`);
console.log(`Model ${this.Model}`);
console.log(`Year ${this.Year}`);
return this.Information;
}
}

//creates instance of the variable
let MyVehicle = new vehicle(`w`, `w`, 2002);
MyVehicle.Information();


//Child Class
class Cars extends vehicle{

constructor(Make, Model, Year, doors){
//inherits from the parent class
super(Make, Model, Year);
//local instance 
this.doors = doors;


}
//information method to display info
Information(){

//calls the parents class information method to use it 
super.Information();
console.log(`doors ${this.doors}`);

}
//instance of the child class
}
let MyCar = new Cars(`w`, `w`, 2002, 5);
MyCar.Information();







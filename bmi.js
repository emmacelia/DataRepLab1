//creates a class
class BMI{
    //creates a constructor
    constructor(height, weight ){

    //constructor arguements
     this.height = height;
     this.weight = weight;
    }
    //method to calculate BMI
    calculateBMI(){
        let bmi = thos.weight/(this.height**2);
        return bmi;
    }

}
//Instance of class
let myBMI = new BMI(10, 34);
myBMI.calculateBMI();

//prints out the result 
console.log(myBMI.calculateBMI());
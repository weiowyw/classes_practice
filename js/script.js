

let appsAmount = 0;
class Person{

    constructor(newName, newGender){
        this.name = newName;
        this.gender = newGender;
    }

}
const resident = new Person("Sofa", "Female");
const resident2 = new Person("S", "Female");
const resident3 = new Person("So", "Female");
const resident4 = new Person("Sof", "Female");


class Apartment {

    constructor(){
        this.residentsArr = [];
    }

    addResident(r){
        this.residentsArr.push(r);
    }

    print(){
        console.log(this.residentsArr);
    }

}

const flat = new Apartment();
flat.addResident(resident);
flat.addResident(resident2);
flat.print();
appsAmount++;

const flat2 = new Apartment();
flat2.addResident(resident3);
flat2.addResident(resident4);
flat2.print();
appsAmount++;

class Building {

    constructor(maxAmount, actualAmount) {
         this.maxAppsAmount = maxAmount;
         this.apartmentsArr = [];
         this.amount = actualAmount;
    }

    addApartment(f){
        if(this.amount < this.maxAppsAmount)
            this.apartmentsArr.push(f);
        else console.log("Sorry, out building ran out of space for new apartment");

    }

    print(){
        console.log(this.apartmentsArr);
    }

}

const skyscraper = new Building(3, appsAmount);
skyscraper.addApartment(flat);
skyscraper.addApartment(flat2);
skyscraper.print();

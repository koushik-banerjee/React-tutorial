// class person{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const details = new person("Koushik",22);
// console.log(details.name);
// console.log(details.age);



class Car{
    constructor(brand,model,hp){
        this.brand=brand;
        this.model=model;
        this.hp=hp;
    }


    display(){
        console.log(this.brand);
        console.log(this.model);
        console.log(this.hp);
        console.log();
    }
}

const toyota = new Car("Toyota", "fortuner", "500hp")
const ford = new Car("Ford","Mustang", "750hp")
toyota.display()
ford.display()
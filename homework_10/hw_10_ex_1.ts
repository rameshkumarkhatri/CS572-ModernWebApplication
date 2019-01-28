class University {
    name: String;
    // dept : String;
    
    constructor(name: String, private dept: String){
        this.name = name;
    }

    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}


let mum = new University("MUM", "Computer Science");
mum.graduation(2019);
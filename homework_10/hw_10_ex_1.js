var University = /** @class */ (function () {
    // dept : String;
    function University(name, dept) {
        this.dept = dept;
        this.name = name;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return University;
}());
var mum = new University("MUM", "Computer Science");
mum.graduation(2019);

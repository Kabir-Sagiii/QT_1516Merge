var C1 = /** @class */ (function () {
    function C1() {
        this.name = "raj";
    }
    C1.prototype.changeName = function () {
        console.log(this.name);
    };
    return C1;
}());
var c1 = new C1();
c1.changeName();
c1.name = "sneha";
c1.changeName();

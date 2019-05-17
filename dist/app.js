var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Help-me, Obi-Wan Kenobi. You´re my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode: " + 4);
episode++;
console.log("Next episode is: " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My FavoriteDroid: " + favoriteDroid);
//function
var passos = function (valor) {
    return valor < 12;
};
//template string
var distance = 11;
console.log("Is " + distance + " e maior que os valor? " + (passos(distance) ? 'Sim' : 'Nao') + " ");
//esquedo: declaracao
//direito: implementacao
//Arrow function
var call = function (name) { return console.log("Do youcopy, " + name + "?"); };
call('R2');
//usando parametro padrao/predefinido
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("in(5) = " + inc(5));
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entrou no espaco " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log("Failed to jum into hyperspace");
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good the job? " + (goodForTheJob ? 'Sim' : 'Nao'));

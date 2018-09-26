class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    perimeter(){
        let sum = 0;
        for (let i = 0; i < this.sides.length; i++) {
            sum = sum + this.sides[i];
        }
        return sum;
    }
    
}

const pentagon = new Polygon([10,20,30,40,43]);
console.log(pentagon.perimeter());

function rectangle(a,b) {
    let rec={
        length: a,
        width: b,
        perimeter: 2*(a+b),
        area: a*b
    }

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
    
    return rec;
}

rectangle(4,5);
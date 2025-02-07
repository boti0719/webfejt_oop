const obj={};
obj.calculate=(a, b, cb)=>{
    return cb(a, b);
}
console.log(obj.calculate(12, 2, (a, b)=>a/b));

const TheFunction=()=>{
    const szam=10;
    const cal=obj.calculate(szam, szam, (a, b)=>a*szam+b);
    console.log(cal);
}
TheFunction();
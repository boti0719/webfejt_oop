const text=document.createElement("input")
text.setAttribute("type", "text")

const sz=new Number();
const button=document.createElement("button")
button.setAttribute("onclick", ()=>{
    sz=text.innerHTML;
    TheFunction(sz);
})
document.body.appendChild(text)
document.body.appendChild(button)


const obj={};
obj.calculate=(a, b, cb)=>{
    return cb(a, b);
}
console.log(obj.calculate(12, 2, (a, b)=>a/b));

const TheFunction=(szam)=>{
    const cal=obj.calculate(szam, szam, (a, b)=>a*szam+b);
    console.log(cal);
}

function fun(param){
    console.log(param.nev);
}
function funa(){
    console.log(this.nev);
}
const funb=function(param){
    console.log(param.nev);
}
const func = (param)=>{
    console.log(param.nev);
}
fun({nev:"II András"});
const banan=funa.bind({nev:"IV Béla"});
banan();
funb({nev:"Mátyás"});
func({nev:"Mária Terézia"});
const obj={
    funa:(param)=>{console.log(param)},
    funb:(param)=>{console.log(param.nev)}
}
obj.funa("Szent István");
obj.funb({nev:"Koppány"});
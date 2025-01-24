const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(elem){
        this.firstname1=elem.firstname1;
        this.firstname2=elem.firstname2;
        this.lastname = elem.lastname;
    }
    render(tbody){
        const tr=document.createElement("tr");
        tr.addEventListener("click", function(e){
            e.preventDefault();
            if(tr.getAttribute("class") !== "kiemel"){
                tr.removeAttribute("class");
            }else{
                tr.setAttribute("class", "kiemel")
            }

        })
        tbody.appendChild(tr);
        const td1=document.createElement("td");
        const td2=document.createElement("td");
        const td3=document.createElement("td");
        td1.innerHTML=this.lastname;
        tr.appendChild(td1);
        if(this.firstname2==undefined) {
            td2.colSpan=2;
        }else{
            td3.innerHTML=this.firstname2;
            tr.appendChild(td3);
        }
        td2.innerHTML=this.firstname1;
        tr.appendChild(td2);
        
    }
}
class formController{
    #form
    get lastname(){
        return this.#squirrel("lastname").value;
    }
    get firstname1(){
        return this.#squirrel("firstname1").value;
    }
    get firstname2(){
        return this.#squirrel("firstname2").value;
    }
    constructor(form){
        this.#form=form;
    }
    #squirrel(id){
        return this.#form.querySelector("#"+id)
    }
    
}

function init(){
    const tbody=document.getElementById("tbodyId");
    const form= document.getElementById("form");
    const controller = new formController(form);
    
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const obj={
            firstname1:controller.firstname1,
            firstname2:controller.firstname2==""?undefined:controller.firstname2,
            lastname:controller.lastname
        }
        const n= new Person(obj);
        n.render(tbody)
    })
    for(const elem of array){
        const ember=new Person(elem);
        ember.render(tbody);
    }
}
init();

class Arraylist{
    /**
    * @type {Number}
    */
    #count;
    #list;
    #artab
    get Count(){
        return this.#count;
    }
    clear(){
        this.#list={};
        this.#count=0;
    }
    constructor(par=undefined){
        this.clear();
        this.#artab=par
    }
    add(item){
        const index=this.#count
        this.#list[index]=item
        Object.defineProperty(this, index, { 
            get:()=>{
                return this.#list[index];
            }, 
            set:(value)=>{
                this.#list[index]=value;
            },
            configurable:true,
            enumerable:true
        })
        this.#count++
    }
    
}
const array=new Arraylist();
array.add(54);
array.add("asd");
array.add({nev:"Lajos"});
console.log(array[1]);

class HTMLTable extends HTMLElement{
    #tbody

    constructor(){
        super();
    }
    connectedCallback(){
        const table=document.createElement("table");
        const thead=document.createElement("thead");
        this.#tbody=document.createElement("tbody");
        table.appendChild(thead);
        table.appendChild(this.#tbody);
        this.appendChild(table);

    }
    /**
     * @param {{nev: String, eletkor: Number}} obj;
     */
    addPersonRow(obj){
        const tr = document.createElement("tr");
        this.#tbody.appendChild(tr);
        const td1=document.createElement("td");
        const td2=document.createElement("td");
        td1.innerHTML=obj.nev;
        td2.innerHTML=obj.eletkor;
        this.#tbody.appendChild(td1);
        this.#tbody.appendChild(td2);

    }
}
customElements.define("array-table", HTMLTable);
const tab = new HTMLTable();
tab.connectedCallback();
tab.addPersonRow({nev: "Atilla", eletkor:56});
document.body.appendChild(tab);
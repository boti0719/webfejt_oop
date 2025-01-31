/** létrehozza a típust
 * @typedef {{nev: String, eletkor: Number}} Person
 * @callback UpdateCallBack
 * @param {Person[]} Persons
 * @returns {void}
*/
class DataManager{
    /** felhasználja a típust
     * @type {Person[]}
    */
    #array;
    /**
     * @type {UpdateCallBack}
    */
    #updateCall;
    /**
     * @param {Person[]} hehe
     */
    constructor(hehe=[]){
        this.#array=hehe;
        this.#updateCall=()=>{};
    }
    /**
     * @param {UpdateCallBack} call
     */
    SetUpdateCall(call) {
       this.#updateCall = call;
       this.#updateCall(this.#array)
    }
    /**
     * @param {Person} person
     */
    add(person){
        this.#array.push(person);
        this.#updateCall(this.#array);
    }
    /**
     * @param {String} name 
     */
    fiterName(name){
        const arr=[];
        for(const pers of this.#array){
            if(pers.nev.includes(name))
                arr.push(pers);
        }
        this.#updateCall(arr);
    }
    /**
     * @param {Number} age 
     */
    filterAge(age){
        const arr=[];
        for(const pers of this.#array){
            if(pers.eletkor===age)
                arr.push(pers);
        }
        this.#updateCall(arr);
    }
}
class DataTable{
    /**
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){
        const table = document.createElement("table")
        const tbody = document.createElement("tbody")
        document.body.appendChild(table);
        table.appendChild(tbody);
        dataManager.SetUpdateCall((Persons)=>{
            tbody.innerHTML="";
            for(const per of Persons){
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                td1.innerHTML=per.nev;
                td2.innerHTML=per.eletkor;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tbody.appendChild(tr);
            }
        });
    }
}
const data= new DataManager([{nev:"Irén", eletkor:112},{nev:"Peti", eletkor:12}]);
const tab = new DataTable(data);
data.add({nev:"Lajos", eletkor:45});
//data.fiterName("Irén");
//data.filterAge(12);
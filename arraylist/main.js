
class Arraylist{
    /**
    * @type {Number}
    */
    #count;
    #list;
    get Count(){
        return this.#count;
    }
    clear(){
        this.#list={};
        this.#count=0;
    }
    constructor(){
        this.clear();
    }
    add(item){
        const index=this.#count
        this.#list[index]=item
        Object.defineProperty(this, index, { 
            get: function(){
                return this.#list[index];
            }, 
            set: function(value){
                this.#list[index]=value;
            }
        })
        this.#count++
    }
    
}
const array=new Arraylist();
array.add(54);
array.add("asd");
array.add({nev:"Lajos"})
console.log(array[2]);


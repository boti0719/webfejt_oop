class Manager{
    #array;
    #selectCallback;
    #addCallback;

    constructor(){
        this.#array = [];
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    setSelectCallback(callback){
        this.#selectCallback=callback;
    }

    add(student){
        this.#array.push(student);   
    }

    select(student){
        this.#selectCallback(student);
    }

    generateTextForExport(){
        const result=[];
        for(const student of this.#array){
            const badValue = student.bad ? "1" : "0";
            const line = `${student.name};${student.average};${student.comment};${badValue}`;
            result.push(line);
        }
        return result.join("\n")
    }

    render(){
        for(const student of this.#array){
            this.#addCallback(student);
        }
    }
}
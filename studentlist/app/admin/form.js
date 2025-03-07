class FormController{
    /**
     * @type {Manager}
     */
    #maneger; 

    /**
     * @type {FormField[]}
     */
    #formFieldArray

    /**
     * 
     * @param {{id: string, label: string, type: string, optional?: boolean}[]} fieldConfiguration 
     * @param {Manager} maneger 
     */
    constructor(fieldConfiguration, maneger){
        this.#formFieldArray=[];
        const form= document.createElement("form");
        document.body.appendChild(form);
        for(const field of fieldConfiguration){
            const formField=new FormField(field.id, field.label, field.type, field.optional);
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getDivElement());
        }
        const sendButton=document.createElement("button");
        sendButton.textContent="Elküld";
        form.appendChild(sendButton);
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            if (this.#validateAllFields()){
                const value = this.#getValueObject();
                const student = new Student(value.studentname, value.studentaverage, value.studentcomment, value.studentbad);
                maneger.add(student);
                e.target.reset();
            }
        })
    }
    #validateAllFields(){
        let valid=true;
        for (const formField of this.#formFieldArray){
            formField.error="";
            if(!formField.optioinal){
                if(formField.value===""){
                    formField.error="mezo kitoltese kotelezo";
                    valid=false
                }
            }
        }
        return valid;
    }
    /** 
     * @returns {{studentname: string, studentaverage: string, studentcomment: string, studentbad: boolean}}
     */
    #getValueObject(){
        const result={};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        return result;
    }
}

class FormField{
    /**
     * @type {string}
     */
    #id

    /**
     * @type {string}
     */
    #type

    /**
     * @type {boolean}
     */
    #optional

    /**
     * @type {HTMLInputElement}
     */
    #inputfield

    /**
     * @type {HTMLSpanElement}
     */
    #errorField

    /**
     * @type {HTMLLabelElement}
     */
    #labelElement

    get id(){
        return this.#id;
    }

    get value(){
        if(this.#type==="checkbox")
            return this.#inputfield.checked;
        return this.#inputfield.value
    }

    get optioinal(){
        return this.#optional;
    }

    /**
     * @param {string} value
     */
    set error(value){
        this.#errorField.textContent = value;
    }
    
    constructor(id, labelContent, type, optioinal=false){
        this.#id=id;
        this.#type=type;
        this.#optional=optioinal;
        this.#labelElement= Gomszab.makeLabel(id, labelContent);
        this.#inputfield= Gomszab.makeInput(id, type);
        this.#errorField = Gomszab.makeErrorField();
    }
    getDivElement(){
        const div=Gomszab.makeDiv([this.#labelElement, this.#inputfield, this.#errorField]);
        return div;
    }
}
/**
 * @callback NextQuestionCallBack
 * @param {string} kerdes
 * @callback NextAnswerCallBack
 * @param {string[]} valaszok
 * @callback FinishCallBack
 * @param {string} result
 */
class Manager{
    /**
     * @type {Question[]}
     */
    #array;
    /**
     * @type {number}
     */
    #currentNumber
    /**
     * @type {object}
     */
    #selectedAnswer
    /**
     * @type {NextQuestionCallBack}
     */
    #nextQuestionCallBack;
    /**
     * @type {NextAnswerCallBack}
     */
    #nextAnswersCallBack;
    /**
     * @type {FinishCallBack}
     */
    #fininshCallBack;

    /**
     * @param {Question[]} array 
     */
    constructor(array){
        this.#array=array;
        this.#currentNumber=0;
        this.#selectedAnswer={};
    }

    /**
     * @param {NextQuestionCallBack} callback 
     */
    setNextQuestionCallBack(callback){
        this.#nextQuestionCallBack=callback;
    }
    /**
     * @param {NextAnswersCallBack} callback 
     */
    setNextAnswerCallBack(callback){
        this.#nextAnswersCallBack=callback;
    }

    /**
     * @param {FileCallback} callback 
     */
    setFinishCallBack(callback){
        this.#fininshCallBack=callback;
    }

    nextQuestion(answer){
        this.#selectedAnswer[this.#currentNumber]=answer;
        this.#currentNumber++;
        if (this.#currentNumber < this.#array.length){
            const nextQuestion = this.#array[this.#currentNumber];
            this.#nextQuestionCallBack(nextQuestion.questionText);
            this.#nextAnswersCallBack(nextQuestion.answers);
        }else{
            let counter = 0;
            for (const index in this.#array){
                if(this.#array[index].rightAnswer === this.#selectedAnswer[index]){
                    counter++;
                }
            }
            const result= "A kérdéssor véget ért: " + this.#array.length + "/" + counter;
            this.#fininshCallBack(result);
        }
    }
    start(){
        this.#nextQuestionCallBack(this.#array[0].questionText);
        this.#nextAnswersCallBack(this.#array[0].answers);
    }
}
export interface IQuestion{
id: number;
text: string;
questionSet: number;
quote?;
}

export interface QuestionApi {
    _id: number;
    text: string;
    date: string;
    questionSet: number;
    answers: number[],
    quote: number
}

export class Question {
    checked: boolean = false;
    constructor(
    public id: number,    
    public text: string,
    public date: Date,
    public questionSetId: number,
    public answerIds: number[],
    public quoteId?: number) {
    }
} 
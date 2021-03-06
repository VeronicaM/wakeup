import { Quote, QuoteApi } from './quote.model';
import { AnswerApi } from './answer.model';
import { QuestionSet, QuestionSetApi } from './question-set.model';

export interface IQuestion {
  id: number;
  text: string;
  questionSet: number;
  quote?;
}

export interface QuestionApi {
  _id: number;
  text: string;
  date: string;
  questionSet: number | QuestionSetApi;
  answers: number[] | Object[] | AnswerApi[];
  quote: any;
}

export class Question {
  checked = false;
  questionSet : number | QuestionSet;
  constructor(
    public id: number,
    public text: string,
    public date: Date,
    public answers: number[] | Object[],
    public quote?: any
  ) {}
}

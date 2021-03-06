import * as moment from 'moment';

export interface IAnswer {
    text: string;
    question: number;
    date;
}

export interface AnswerApi {
    _id: number;
    question: number;
    text: string;
    date: number;
}

export class Answer {
    groupDay;
    constructor(
        public id: number,
        public questionid: number,
        public text: string,
        public createDate: Date) {
            this.groupDay = moment(createDate).format('dddd, DD MMM YYYY');
         }
}

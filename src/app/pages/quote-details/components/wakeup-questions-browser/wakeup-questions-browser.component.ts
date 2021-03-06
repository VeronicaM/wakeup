import { Component, OnInit } from "@angular/core";
import { MdDialogRef } from "@angular/material";
import { Store } from "@ngrx/store";
import * as reducers from "../../../../common/reducers";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import * as actions from "../../../../common/actions/question.actions";
import isEqual from "lodash/isEqual";

@Component({
  selector: "wakeup-questions-browser",
  templateUrl: "./wakeup-questions-browser.component.html",
  styleUrls: ["./wakeup-questions-browser.component.scss"]
})
export class WakeupQuestionsBrowserComponent implements OnInit {
  allQuestionsSubscription: Subscription;
  questionSets;
  currentQuestionSet;
  selectedQuestions;
  initialSelection;
  constructor(
    private store: Store<reducers.State>,
    public dialogRef: MdDialogRef<WakeupQuestionsBrowserComponent>
  ) {}

  ngOnInit() {
    this.initialSelection = this.selectedQuestions;
    this.store.dispatch(new actions.LoadAction());
    this.allQuestionsSubscription = this.store
      .select(reducers.getQuestionsState)
      .subscribe(questionSets => {
        this.questionSets = questionSets;
        if (questionSets) {
          this.currentQuestionSet = this.getCurrentQuestionSet();
        }
      });
  }

  safeClose() {
    const noDifference = isEqual(
      this.selectedQuestions.map(q => q.id),
      this.initialSelection.map(q => q.id)
    );

    this.dialogRef.close(noDifference ? undefined : this.selectedQuestions);
  }

  toggleSelectedQuestion(question) {
    if (this.isSelectedQuestion(question)) {
      this.selectedQuestions = this.selectedQuestions.filter(
        q => q.id !== question.id
      );
    } else {
      this.selectedQuestions = [...this.selectedQuestions, question];
    }
  }

  isSelectedQuestion(question) {
    return this.selectedQuestions.find(q => q.id === question.id);
  }

  getCurrentQuestionSet() {
    const selectedIds = this.selectedQuestions.map(question => question.id);
    const questionSet = this.questionSets.find(
      qs =>
        qs.questions.find(q => selectedIds.indexOf(q.id) !== -1) !== undefined
    );
    return questionSet
      ? questionSet
      : this.questionSets.length ? this.questionSets[0] : {};
  }
}

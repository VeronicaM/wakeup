import { Action } from "@ngrx/store";
import { Answer } from "../models/answer.model";
import * as actions from "../actions/answer.actions";
import Helper from "./helper";

const helper = new Helper();

export interface State {
  entities: Answer[];
  isLoading;
  groupedAnswers;
}

export const initialState: State = {
  entities: [],
  isLoading: false,
  groupedAnswers: {}
};

export function reducer(state = initialState, action: Action): State {
  let newEntities;
  switch (action.type) {
    case actions.ActionTypes.LOAD:
    case actions.ActionTypes.UPDATE:
    case actions.ActionTypes.DELETE:
    case actions.ActionTypes.CREATE:
    case actions.ActionTypes.DELETE_ALL: {
      return Object.assign({}, state, {
        isLoading: true
      });
    }
    case actions.ActionTypes.LOAD_SUCCESS:
      return Object.assign({}, state, {
        entities: action.payload,
        groupedAnswers: helper.groupAnswersByDate(action.payload),
        isLoading: false
      });
    case actions.ActionTypes.UPDATE_SUCCESS:
      newEntities = onUpdateAnswer(state.entities, action.payload);
      return Object.assign({}, state, {
        entities: newEntities,
        groupedAnswers: helper.groupAnswersByDate(newEntities),
        isLoading: false
      });
    case actions.ActionTypes.DELETE_SUCCESS:
      newEntities = onDeleteAnswer(state.entities, action.payload);
      return Object.assign({}, state, {
        entities: newEntities,
        groupedAnswers: helper.groupAnswersByDate(newEntities),
        isLoading: false
      });
    case actions.ActionTypes.CREATE_SUCCESS:
      newEntities = onCreateAnswer(state.entities, action.payload);
      return Object.assign({}, state, {
        entities: newEntities,
        groupedAnswers: helper.groupAnswersByDate(newEntities),
        isLoading: false
      });
    case actions.ActionTypes.DELETE_ALL_SUCCESS:
      return Object.assign({}, state, {
        entities: [],
        groupedAnswers: [],
        isLoading: false
      });
    default: {
      return state;
    }
  }
}

function onUpdateAnswer(answers, answerToUpdate) {
  return answers.map(answer => {
    if (answer.id === answerToUpdate.id) {
      answer = Object.assign({}, answerToUpdate);
    }
    return answer;
  });
}

function onDeleteAnswer(answers, answerToDelete) {
  return answers.filter(answer => {
    return answer.id !== answerToDelete;
  });
}

function onCreateAnswer(answers, answerToAdd) {
  return [...(answers || []), answerToAdd];
}

function onDeleteAllAnswers(answers) {
  return [];
}

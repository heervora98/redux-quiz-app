const INITIAL_STATE = {
    states: []
}

const INITIAL_ANSWER_STATE = {
    answers: []
}

export const stateReducer = (state = INITIAL_STATE, action) => {
    // debugger;
    switch (action.type) {
        case "ADD_USERDATA":
            return {
                ...state,
                states: [...state.states, action.payload]
            }
            default:
                return state
    }

}

export const answerReducer = (state = INITIAL_ANSWER_STATE, action) => {
    switch (action.type) {
        case "ADD_ANSWERKEY":
            return {
                ...state,
                answers: [...state.answers, action.payload]
            }
            case "UPDATE_ANSWER":
            // console.log(action.payload, '-->state');
            const updateAnswer = state.answers.map((answer) => answer?.id === action.payload?.id ? action.payload : answer)
            // console.log(updateAnswer, '--->updateAnswer');
            // state.answer = updateAnswer;
            return {
                ...state,
                answers: updateAnswer
            }
        default:
            return state
    }
}
export const ADDUSER = (data) => {
    console.log(data,"action");
    return{
        type:"ADD_USERDATA",
        payload: data
    }
}

export const SENDDATA = (data) => {
    return{
        type:"ADD_QUESTIONDATA",
        data:data,
        isHttpsAction : true,
        method:'POST',
        url:'/quizdata'
    }
}

export const ANSWERKEY = (item) => {
    return{
        type:"ADD_ANSWERKEY",
        payload:item
    }
}

export const UPDATE_ANSWER = (item) => {
    return{
        type:"UPDATE_ANSWER",
        payload:item
    }
}
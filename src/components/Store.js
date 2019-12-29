import React from 'react';

export const CTX = React.createContext();


const initState = {
    general: [
        {from: 'aaron',msg:'hello'},
        {from: 'aaron',msg:'yo'},
        {from: 'aaron',msg:'hi'},
    ],
    football: [
        {from:'moss',msg:'what was wenger doing putting walcott on that early'},
        {from:'moss',msg:'did you see that ludicrious display last night'},
        {from:'arsenal',msg:'..'}
    ]
}

function reducer(state,action){
    const {from,msg,topic} = action.payload;

    switch(action.type){
        case 'RECIEVE_MESSAGE':
            return {
                ...state,
                [action.payload.topic]: [
                    ...state[action.payload.topic],
                    {from, msg}
                ]
            }
        default:
            return state;
    }
}

export default function Store(props){

    const reducerHook = React.useReducer(reducer,initState);

    return (
        <CTX.Provider value = {reducerHook}>
            {props.children}
        </CTX.Provider>
    )

}
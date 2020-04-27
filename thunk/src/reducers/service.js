import {FETCH_SERVICE_REQUEST,FETCH_SERVICE_ERROR,FETCH_SERVICE_SUCCESS,CLEAR_SERVICE_FIELD,CHANGE_SERVICE_FIELD} from'../actions/actionCreators';


const initState = {
    item: {},
    isLoading: false,
    hasError: null,
};


export default function serviceReducer(state = initState, action){

    switch(action.type){

        case FETCH_SERVICE_REQUEST:
            console.log('start fetch service')
            const {serviceId} = action.payload;
            return {...state, item: {id:serviceId}, isLoading: true, hasError: false};
        case FETCH_SERVICE_ERROR:
            console.log('fetch service error',action)
            return {...state, isLoading: false, hasError: true};
        case FETCH_SERVICE_SUCCESS:
            const {item:itemFetched} = action.payload
            return {...state, isLoading:false, item: itemFetched  }
        case CHANGE_SERVICE_FIELD:
            console.log('change sservice field',action.payload.action)
            console.log('STATE NOW',state)
            return {...state,item:action.payload.action}
        case CLEAR_SERVICE_FIELD:
            return {...initState};
        default:
            return state;
    }

}
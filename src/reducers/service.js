import {FETCH_SERVICE_REQUEST,FETCH_SERVICE_ERROR,FETCH_SERVICE_SUCCESS,CLEAR_SERVICE_FIELD} from'../actions/actionCreators';


const initState = {
    item: {},
    isLoading: false,
    hasError: null,
};


export default function serviceReducer(state = initState, action){

    switch(action.type){
        case FETCH_SERVICE_REQUEST:
            const {serviceId} = action.payload;
            return {...state, item: {id:serviceId}, isLoading: true, hasError: null};
        case FETCH_SERVICE_ERROR:
            const {message} = action.payload;
            return {...state, isLoading: false, hasError: message};
        case FETCH_SERVICE_SUCCESS:
            const {item:itemFetched} = action.payload
            return {...state, isLoading:false, item: itemFetched  }
        case CLEAR_SERVICE_FIELD:
            return {...initState};
        default:
            return state;
    }

}
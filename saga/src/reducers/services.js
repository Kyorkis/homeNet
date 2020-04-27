import {FETCH_SERVICES_REQUEST,FETCH_SERVICES_ERROR,FETCH_SERVICES_SUCCESS} from'../actions/actionCreators';


const initState = {
    items: [],
    isLoading: false,
    hasError: null,
};


export default function servicesReducer(state = initState, action){
    switch(action.type){
        case FETCH_SERVICES_REQUEST:
            console.log('start')
            
            return {...state, isLoading:true, hasError:null};
            
        case FETCH_SERVICES_ERROR:
            console.log('error')
            const {message} = action.payload;
            return {...state, isLoading:false, hasError:message};
        case FETCH_SERVICES_SUCCESS:
            console.log('success')
            const {items} = action.payload;
            return {...state, items, isLoading:false, hasError:null};
        default:
            return state;
    }

}
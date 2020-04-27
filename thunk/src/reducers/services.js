import {FETCH_SERVICES_REQUEST,FETCH_SERVICES_ERROR,FETCH_SERVICES_SUCCESS} from'../actions/actionCreators';


const initState = {
    items: [],
    isLoading: false,
    hasError: null,
};


export default function servicesReducer(state = initState, action){
    switch(action.type){

        /* Под саги
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
            */
        case FETCH_SERVICES_ERROR:
            console.log('error')
            return {...state,isLoading:false,hasError:true}

        case FETCH_SERVICES_REQUEST:
            console.log('start load')
            return {...state,isLoading:true,hasError:false}

        case FETCH_SERVICES_SUCCESS:
            const {items}=action.payload
            console.log('recieved items',items)
            
            return {...state,items,isLoading:false,hasError:false}
        default:
            return state
    }

}
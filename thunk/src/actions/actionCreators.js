export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';


export const FETCH_SERVICE_REQUEST = 'FETCH_SERVICE_REQUEST';
export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
export const FETCH_SERVICE_ERROR = 'FETCH_SERVICE_ERROR';

export const SAVE_SERVICE_INIT = 'SAVE_SERVICE_INIT';
export const SAVE_SERVICE_REQUEST = 'SAVE_SERVICE_REQUEST';
export const SAVE_SERVICE_ERROR = 'SAVE_SERVICE_ERROR';
export const SAVE_SERVICE_SUCCESS = 'SAVE_SERVICE_SUCCESS';

export const DELETE_SERVICE_REQUEST = 'DELETE_SERVICE_REQUEST';
export const DELETE_SERVICE_ERROR = 'DELETE_SERVICE_ERROR';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';


export const ADD_SERVICE = 'ADD_SERVICE';
export const DEL_SERVICE = 'DEL_SERVICE';
export const SEL_SERVICE = 'SEL_SERVICE';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD';
export const CLEAR_SERVICE_FIELD = 'CLEAR_SERVICE_FIELD';





export function servicesIsLoading(bool){
    console.log('servicesIsLoading')
    return{
        type:FETCH_SERVICES_REQUEST,
        isLoading:bool,
    }
}

export function servicesLoaded(items){
    console.log("servicesLoaded",items)
    return{
        type:FETCH_SERVICES_SUCCESS,
        payload:{items}
    }   
}
export function servicesLoadingError(bool){
    console.log("servicesLoadingError")
    return{
        type:FETCH_SERVICES_ERROR,
        hasError:bool
    }
}

export function fetchAllServices(url){
    console.log('Thunk gena пошел')
    return (dispatch)=>{
        dispatch(servicesIsLoading(true))

        fetch(url)
            .then((response)=>{
                if (!response.ok){
                    throw Error(response.statusText)
                }

                dispatch(servicesIsLoading(false))

                return response
            })
            .then((response)=>response.json())
            .then((items) => dispatch(servicesLoaded(items)))
            .catch(()=>dispatch(servicesLoadingError(true)))

    }
}





export function serviceIsLoading(serviceId,bool){
    console.log('serviceIsLoading')
    return{
        type:FETCH_SERVICE_REQUEST,
        payload:{serviceId},
        isLoading:bool,
        hasError:false
    }
}

export function serviceLoadingError(bool){
    console.log("serviceLoadingError")
    return{
        type:FETCH_SERVICE_ERROR,
        isLoading:false,
        hasError:bool
    }
}

export function serviceLoaded(item){
    console.log('serviceLoaded')
    return{
        type:FETCH_SERVICE_SUCCESS,
        isLoading:false,
        hasError:false,
        payload:{item}
    }
}


export function fetchServiceById(serviceId){
    return (dispatch)=>{
        dispatch(serviceIsLoading(serviceId,true))

        fetch(`http://localhost:7777/services/${serviceId}`)
            .then((response)=>{
                if (!response.ok){
                    throw Error(response.statusText)
                }

                dispatch(serviceIsLoading(false))

                return response
            })
            .then((response)=>response.json())
            .then((item) => dispatch(serviceLoaded(item)))
            .catch(()=>dispatch(serviceLoadingError(true)))
    }
}





export function changeServiceField(action){
    console.log('action change',action)
    return {type:CHANGE_SERVICE_FIELD, payload:{action}};
}





export const fetchServicesRequest = () => {
    console.log('Старт в эшкн') 
    return {type:FETCH_SERVICES_REQUEST};
};

export const fetchServicesSuccess = (items) => { 
    console.log('Саксес в экшн')
    return {type:FETCH_SERVICES_SUCCESS, payload:{items}};
};

export const fetchServicesError = (message) => { 
    console.log("Ошибка в экшн",message)
    return {type:FETCH_SERVICES_ERROR, payload:{message}};
};

export const fetchServiceError = (message) => { 
    return {type:FETCH_SERVICE_ERROR, payload:{message}};
};
export const fetchServiceRequest = (serviceId) => { 
    return {type:FETCH_SERVICE_REQUEST, payload:{serviceId}};
};
export const fetchServiceSuccess = (item) => {  
    return {type:FETCH_SERVICE_SUCCESS, payload:{item}};
};
export const fetchServiceSaveInit = () => { 
    return {type:SAVE_SERVICE_INIT, payload:{}};
};
export const fetchServiceSaveRequest = () => { 
    return {type:SAVE_SERVICE_REQUEST, payload:{}};
};
export const fetchServiceSaveSuccess = (item) => { 
    return {type:SAVE_SERVICE_SUCCESS, payload:{item}};
};
export const fetchServiceSaveError = (message) => { 
    return {type:SAVE_SERVICE_ERROR, payload:{message}};
};
export const fetchServiceDeleteRequest = (serviceId) => { 
    return {type:DELETE_SERVICE_REQUEST, payload:{serviceId}};
};
export const fetchServiceDeleteSuccess = (serviceId) => { 
    return {type:DELETE_SERVICE_SUCCESS, payload:{serviceId}};
};
export const fetchServiceDeleteError = (serviceId,message) => { 
    return {type:DELETE_SERVICE_ERROR, payload:{serviceId, message}};
};

export function clearServiceField(){
    return {type:CLEAR_SERVICE_FIELD, payload:{}};
}
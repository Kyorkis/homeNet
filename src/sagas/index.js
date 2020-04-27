import {put,spawn,call,takeLatest} from'redux-saga/effects';
import {fetchServicesSuccess, fetchServiceSuccess, fetchServicesError, fetchServiceError} from'../actions/actionCreators';
import {FETCH_SERVICES_REQUEST,FETCH_SERVICE_REQUEST} from'../actions/actionCreators';



function* handleServicesRequestSaga(){
    try{
        const items = yield call(fetchRequest,`http://localhost:7777/services`);
        yield put(fetchServicesSuccess(items));
    }
    catch(e){
        yield put(fetchServicesError(e.message));
    }
    
}

function* watchServicesRequestSaga(){
    yield takeLatest(FETCH_SERVICES_REQUEST, handleServicesRequestSaga);
}

function* handleServiceRequestSaga({payload:{serviceId}}){
    try{
        const item = yield call(fetchRequest,`http://localhost:7777/services/${serviceId}`);
        yield put(fetchServiceSuccess(item));
    }
    catch(e){
        yield put(fetchServiceError(e.message));
    }
    
}

function* watchServiceRequestSaga(){
    yield takeLatest(FETCH_SERVICE_REQUEST, handleServiceRequestSaga);
}

export const fetchRequest = async(url, data) => {
    const response= await fetch(
        url,
        {
            cache: 'no-cache',
            referrer: 'no-referrer',
            method: (data && 'POST') || 'GET',
            headers: {
                ...( ((data) && {'Content-Type': 'application/json'}) || {})
            },
            body: ((data) && JSON.stringify (data)) || undefined
        }
    );
    if (!response.ok){
        throw new Error(response.statusText);
    }
    return await response.json();
}

export default function* saga(){
    yield spawn(watchServicesRequestSaga);
    yield spawn(watchServiceRequestSaga);
}



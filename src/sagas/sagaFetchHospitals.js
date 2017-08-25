
import {delay} from "redux-saga";
import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes.js";
import * as actions from"../Actions/actions.js";
import * as API from "../commonUtils/getAndPostApi.js";

export function* fetchSaga() {

    try {
        yield put(actions.toggleLoader(true));
        yield call(delay,1000);
        let hospitals = yield call(API.getApiCall);
        yield put(actions.fetchHospitalsSuccess(hospitals));
         yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.fetchHospitalsFailure(err));
        yield put(actions.toggleLoader(false));
    }
}
export function* saveSaga(action) {
    try {
        yield put(actions.toggleLoader(true));
        yield call(delay,500);
        let hospitals = yield call(API.postApiCall, action.concerned);
        yield put(actions.saveHospitalsSuccess(hospitals));
        yield put(actions.toggleLoader(false));
    }
    catch (err) {
        yield put(actions.saveHospitalsFailure(err));
        yield put(actions.toggleLoader(false));
    }

}

export function* watchFetchSaga() {

    yield takeEvery(actionTypes.FETCH_DATA, fetchSaga);
}
export function* watchPostSaga() {
    yield takeEvery(actionTypes.SAVE_DATA, saveSaga);
}
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([watchFetchSaga(), watchPostSaga()
    ]);
}
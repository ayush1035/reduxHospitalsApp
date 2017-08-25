import * as sagas from "../sagas/sagaFetchHospitals";
import * as actionTypes from "../constants/ActionTypes.js"
import * as API from "../commonUtils/getAndPostApi.js";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { delay } from "redux-saga";
import React from "react";

describe("Testing Sagas", () => {
    const hospitals = [{ "id": "1", "name": "Max Health care hospital", "address": "Sushant lok,Gurugram,Haryana", "url": "https://static.lybrate.com/imgs/ps/cl/e5b3c9170dcad79e416c062e4599639e/7ff195658a2c92ae7104ecf78f76f410/Max-Hospital-Gurgaon-Gurgaon-004d4a.jpg", "email": "email@example.com" },
    { "id": 2, "name": "GNH Hospital", "address": "Sushant lok b-block,Gurugram,Haryana", "url": "https://www.healthkonnect.com/cdn/organisation/pmv/tol/cjw/8fx/noz/pmvtolcjw8fxnozdcg8xslee_3j1hrpgb.png?version=1", "email": "email@example.com" },];

    describe("fetch hospital Data", () => {
        let func = sagas.fetchSaga();
        it("Making the loader flag true", () => {
            let res = func.next().value;
            expect(res).toEqual(put({
                type: actionTypes.TOGGLE_LOADER,
                loader: true
            }));

        });
        it("Making the delay", () => {
            expect(func.next().value).toEqual(call(delay, 1000));
        });

        it("Making the get API call", () => {
            expect(func.next().value).toEqual(call(API.getApiCall));
        });

        it("API call success", () => {
            let res = func.next(hospitals).value;
            expect(res).toEqual(put({
                type: actionTypes.FETCH_DATA_SUCCESS,
                hospitals: hospitals
            }));
        })
        it("Making the loader flag false", () => {
            let res = func.next().value;
            expect(res).toEqual(put({
                type: actionTypes.TOGGLE_LOADER,
                loader: false
            }));


        })
        it("API call failure", () => {
            let err = { message: "error" };
            expect(func.throw(err).value).toEqual(put({
                type: actionTypes.FETCH_DATA_FAILURE,
                error: err.message + " DATA NOT FETCHED ERROR OCCURED"

            }));
        });


    })

        describe("save hospital Data", () => {
        let action={concerned:{ "id": "1", "name": "Max Health care hospital11", "address": "Sushant lok,Gurugram,Haryana", "url": "https://static.lybrate.com/imgs/ps/cl/e5b3c9170dcad79e416c062e4599639e/7ff195658a2c92ae7104ecf78f76f410/Max-Hospital-Gurgaon-Gurgaon-004d4a.jpg", "email": "email@example.com" }};
        
        let func = sagas.saveSaga(action);
        it("Making the loader flag true", () => {
            let res = func.next().value;
            expect(res).toEqual(put({
                type: actionTypes.TOGGLE_LOADER,
                loader: true
            }));

        });
        it("Making the delay", () => {
            expect(func.next().value).toEqual(call(delay, 500));
        });

        it("Making the post API call", () => {
            expect(func.next().value).toEqual(call(API.postApiCall,action.concerned));
        });

        it("API call success", () => {
            let res = func.next(hospitals).value;
            expect(res).toEqual(put({
                type: actionTypes.SAVE_DATA_SUCCESS,
                hospitals: hospitals
            }));
        })
        it("Making the loader flag false", () => {
            let res = func.next().value;
            expect(res).toEqual(put({
                type: actionTypes.TOGGLE_LOADER,
                loader: false
            }));


        })
        it("API call failure", () => {
            let err = { message: "error" };
            expect(func.throw(err).value).toEqual(put({
                type: actionTypes.SAVE_DATA_FAILURE,
                error: err.message + " DATA NOT SAVED ERROR OCCURED"

            }));
        });


    })
})
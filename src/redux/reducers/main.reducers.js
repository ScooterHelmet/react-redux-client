export function checkAuthReducer(state = {}, action) {
    switch (action.type) {
        case "LOADING_VIEW": {
            return state = { ...state, loadView: action.payload }
        }
        case "ACCESS_GRANTED": {
            return state = { ...state, accessGranted: action.payload }
        }
        case "ACCESS_REQUEST_FAILED": {
            return state = { ...state, requestedDataFailed: action.payload }
        }
        default:
            return state;
    }
}

export function updateShippingDataByShipmentIDReducer(state = {}, action) {
    switch (action.type) {
        case "LOADING_SAR_VIEW": {
            return state = { ...state, loadView: action.payload }
        }
        case "UPDATE_SHIPPING_DATA_SUCCESS": {
            return state = { ...state, updateShippingDataSuccess: action.payload }
        }
        case "UPDATE_SHIPPING_DATA_FAILED": {
            return state = { ...state, updateShippingDataFail: action.payload }
        }
        default:
            return state;
    }
}


export function requestSucceededReducer(state = {}, action) {
    switch (action.type) {
        case "REQUESTED_DATA_SUCCESSFULLY": {
            return state = { ...state, address1: action.payload.address1 }
        }
        default:
            return state;
    }
}

export function loadingViewReducer(state = {}, action) {
    switch (action.type) {
        case "LOADING_VIEW": {
            return state = { ...state, loadView: action.payload }
        }
        default:
            return state;
    }
}

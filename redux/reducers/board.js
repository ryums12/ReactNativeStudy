import {SET_BOARD} from '../constants/board';

const init = {
    tableData: null,
    page: 1,
    startPage: 0,
    lastPage: 0,
    maxPage: 0
}

export default (state = init, action) => {
    switch (action.type) {
        case SET_BOARD:
            return Object.assign({}, state, action.data);
        default:
            return init;
    }
}

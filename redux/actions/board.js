import {SET_BOARD} from '../constants/board';

export function setBoard(data) {
    return {
        type: SET_BOARD,
        data: data,
    };
}

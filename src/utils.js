import {regexDate, regexDistance} from "./constants.js";

export const sortByDate = (a, b) => {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date > b.date) {
        return -1;
    }
    return 0;
}

export const isValidDate = (date) => {
    return regexDate.test(date)
}

export const isValidDistance = (distance) => {
    return regexDistance.test(distance)
}

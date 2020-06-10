export const incrementP1 = () => {
    return {
        type: "INCREMENT_P1"
    };
};

export const setMatch = (data) => {
    return {
        type: "SET_MATCH",
        data: data
    };
};
export const incrementP1 = () => {
    return {
        type: "INCREMENT_P1"
    };
};

export const incrementP2 = () => {
    return {
        type: "INCREMENT_P2"
    };
};

export const setMatch = (data) => {
    return {
        type: "SET_MATCH",
        data: data
    };
};

export const reset = () => {
    return {
        type: "RESET"
    };
};


//to be used in container components (index.js)
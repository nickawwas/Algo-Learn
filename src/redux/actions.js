// Actions
export const addSaved = algo  => {
    return {
        type: "ADD",
        payload: algo
    }
}

export const removeSaved = algo => {
    return {
        type: "REMOVE",
        payload: algo
    }
}

export const updateSaved = (storedAlgs) => {
    return {
        type: "UPDATE",
        payload: storedAlgs
    }
}
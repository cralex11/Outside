export const setLocation = (location) => {
    return {
        type: "SET_LOCATION",
        payload: {
            location: location,
        }
    }
}

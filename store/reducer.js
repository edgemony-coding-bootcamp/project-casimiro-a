const initState = {
    data: [],
    carouselFirstInst: {},
    carouselSecondInst: {},
    carouselIndex: 0
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "setCarouselFirstInst":
            return{
                ...state,
                carouselFirstInst: action.payload
            }
        case "setCarouselSecondInst":
            return{
                ...state,
                carouselSecondInst: action.payload
            }
        case "setCarouselIndex":
            return{
                ...state,
                carouselIndex: action.payload
            }
        default :
            return state;   
    }
}
export { reducer }
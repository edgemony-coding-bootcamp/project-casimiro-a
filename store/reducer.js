
const initState = 
{
    data: [],
    carouselFirstInst: {},
    carouselSecondInst: {},
    carouselIndex: 0,
    searchBarActive: false,
    searchData: [],
    showResult: false,
    showSideMenu: false,
    allActivities: [],
    searchCity: "",
    mapData:"",
}

const reducer = (state = initState, action) => 
{
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
        case "SearchBarAppear":
            return{
                ...state,
                searchBarActive: true,
            }
        case "SearchBarDisappear":
            return{
                ...state,
                searchBarActive: false,
            }
        case "setSearchData":
            return{
                ...state,
                searchData: action.payload,
            }
        case "setSearchCity":
            return{
                ...state,
                searchCity: action.payload,
            }
        case "showResult":
            return{
                ...state,
                showResult: true,
            }
        case "hideResult":
            return{
                ...state,
                showResult: false,
            }
        case "toggleSideMenu":
            return{
                ...state,
                showSideMenu: !state.showSideMenu,
            }
        case "setAllActivities":
            return{
                ...state,
                allActivities: action.payload,
            }
        case "setCart":
            return {
                ...state,
                cart: action.payload,
            }
        case "SetMapData":
            return{
                ...state,
                mapData: action.payload,
            }
        default :
            return state;   
    }
}
export { reducer }

export const setCarouselFirstInst = (data) => ({
    type: "setCarouselFirstInst",
    payload: data
})
export const setCarouselSecondInst= (data) => ({
    type: "setCarouselSecondInst",
    payload: data
})
export const setCarouselIndex= (num) => ({
    type: "setCarouselIndex",
    payload: num
})
export const SearchBarAppear= { type: "SearchBarAppear"}
export const SearchBarDisappear= { type: "SearchBarDisappear"}

const setSearchData = (data) => ({type:"setSearchData", payload: data}) 
const showResult = ({type:"showResult", payload: true});
export const hideResult = ({type:"hideResult", payload: false});
export const SearchFetch = (e) => {

 
        return(dispatch) => {
        fetch(`https://sandbox.musement.com/api/v3/activities?text=${e.target.value}&text_operator=AUTO&extend_other_languages=AUTO&extend_content_fields=AUTO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&limit=10&offset=0`)
        .then(res => res.json())
        .then(data => dispatch(setSearchData(data)))
        .then(dispatch(showResult))
        
    }
}
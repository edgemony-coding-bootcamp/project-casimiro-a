
import axios from 'axios';
import { API_URL } from '../libs/variables';
import { collection, doc, onSnapshot, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { database } from '../firebase';


export const setCarouselFirstInst = (data) => ({
    type: "setCarouselFirstInst",
    payload: data
})
export const setCarouselSecondInst = (data) => ({
    type: "setCarouselSecondInst",
    payload: data
})
export const setCarouselIndex = (num) => ({
    type: "setCarouselIndex",
    payload: num
})
export const SearchBarAppear = { type: "SearchBarAppear" }
export const SearchBarDisappear = { type: "SearchBarDisappear" }

const setSearchData = (data) => ({ type: "setSearchData", payload: data })
const showResult = ({ type: "showResult", payload: true });
export const hideResult = ({ type: "hideResult", payload: false });
export const SearchFetch = (e) => {

    return (dispatch) => {
        axios(`${API_URL}activities?text=${e.target.value}&text_operator=AUTO&extend_other_languages=AUTO&extend_content_fields=AUTO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&limit=10&offset=0`)
            .then(({ data }) => dispatch(setSearchData(data)))
            .then(dispatch(showResult))
    }
}
export const toggleSideMenu = { type: "toggleSideMenu" };
export const setAllActivities = (data) => ({ type: "setAllActivities", payload: data });

export const filterActivities = (filter) => {
    return (dispatch) => {
        function handleHash() {
            if (filter.up === true) {
                window.location.hash = "up"
                setTimeout(() => {
                    window.location.hash = "/"
                }, 100)
            }
        }

        axios(`${API_URL}activities?text_operator=AUTO&extend_other_languages=AUTO&extend_content_fields=AUTO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&city_in=${filter.city}&vertical_in=${filter.category}&sort_by=rating&category_in=&default_price_range=00.00%2C${filter.maxPrice}&limit=8&offset=${filter.pagination * 8}`)
            .then(({ data }) => dispatch(setAllActivities(data)))
            .then(handleHash)
    }
}
const setSearchCity = (data) => ({ type: "setSearchCity", payload: data })
export const searchCity = (e) => {

    return (dispatch) => {
        axios(`${API_URL}autocomplete?sort_by=&text=${e.target.value}&city_limit=5`)
            .then(({ data }) => dispatch(setSearchCity(data)))
    }
}


// Cart
export const setCart = (data) => ({ 
    type: 'setCart', 
    payload: data 
});

export const addCartItem = (idUser, uuid, title, url, price) =>
{
    return dispatch =>
    {
        const collectionByUser = doc(database, `cart/${idUser}/items`, uuid);
        setDoc(collectionByUser, { title: title, url: url, price: price, quantity: 1 })
    }
}

export const getCartItems = (idUser) => 
{
    return dispatch =>
    {
        const collectionByUser = collection(database, `cart/${idUser}/items`);
        onSnapshot(collectionByUser, (data) => {
            dispatch(setCart(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })));
        });
    }
}

export const editCartItem = (idUser, uuid, quantity) =>
{ 
    return dispatch =>
    {
        if(quantity)
        {
            const collectionById = doc(database, `cart/${idUser}/items`, uuid);
            updateDoc(collectionById, { quantity: quantity })
        }
        else
        {
            dispatch(deleteCartItem(idUser, uuid));
        }
    }
}

export const deleteCartItem = (idUser, uuid) =>
{
    return dispatch =>
    {
        const collectionById = doc(database, `cart/${idUser}/items`, uuid);
        deleteDoc(collectionById)
    }
}


const SetMapData = (data) => ({ type: "SetMapData", payload: data })
export const SearchMapData = (coor) => {
    return (dispatch) => {
        axios(`${API_URL}activities?text_operator=AUTO&extend_other_languages=AUTO&extend_content_fields=AUTO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&coordinates=${coor.latitude}%2C${coor.longitude}&distance=${coor.range}KM&limit=100&offset=0`)
        .then(({ data }) => data && dispatch(SetMapData(data)))
        
    }
}

export const setLang = (value) => ({ type: "setLang", payload: value })

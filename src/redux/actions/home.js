//////////////////////ini import dari API,supaya lebih enak untuk ganti host
import {API} from "../../config/API"
////////////////////////////////////////////////////////////////////////////


export const getUser=(name,email)=>async(dispatch)=>{
    try{
        ////////////////ini isi req bodynya
        const body={
            name:name,
            email:email
        }
        ///////////////////////////////////

        //////////////////////ini hit backend, biar lo dapet datanya.
        const res = await API.post("/user-email",body);
        ////////////////////////////////////////////////////////////

        //////////////////contoh dispatch, agar state yg ada di redux berubah.
        //////////////////dan lo bisa manfaatin datanya
        //////////////////kalo pengen tau responsenya apa coba lo console.log(res.data) sebelum dispatch
        dispatch({
        type: "GET_USERS_SUCCESS",
        payload: res.data,
        });
    }catch(err){
        /////////////////////ini handle error response. biar pas dubug kita gabingung
        dispatch({
            type: "GET_USERS_FAIL",
            payload: err.response.data
        })
        /////////////////////////////////////////////////////////////////////////////
    }
}

//////lanjutkan buat function register dibawah ini isi body sama routenya /register
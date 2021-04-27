
////////////////////ini create state yg di redux, ini yg dinamakan global statenya
const initialState = {
    users : "",
    message:"",
    loading:true
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        ///////////////////////////ini handle response dari action, untuk merubah statenya
        case "GET_USERS_SUCCESS":
            ///////////////saat type eksekusi ini yg berubah hanya state yg di return
            return{
                ...state,
                message:payload.messages,
                users : payload.data,
                loading:false
            }
        case "GET_USERS_FAIL":
            return{
                ...state,
                message:payload.messages,
                loading:false
            }
        case "CLEAR":
            return{
                users:"",
                loading:true
            }
        //////lanjutkan buat type dibawah sini atau buat file baru, jangan lupa tambahin statenya di
        /////index.js di reduces sebagai state yg lo pengen
        //////jangan ambil bingung di store, yg penting pahamin reducer dan action
        default:
            return state;
    }
}

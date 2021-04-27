import React,{useEffect,useState} from 'react'
import {getUser} from "../../redux/actions/home"
import {connect} from "react-redux"
import {useDispatch} from "react-redux"

const Home = ({getUser,home}) => {

    const dispatch = useDispatch()

    ///////ini state users dari reducer, bisa diakses di pages home
    const {users,loading,message}=home
    ///////////////////////////////////////////////////////////////

    //////////////////////////cek statenya setelah lo eksekusi actions
    console.log(users,"INI STATE USER DI REDUCES")
    console.log(message,"INI STATE MESSAGE")
    /////////////////////////////////////////////////////////////////

    ////////////local state untuk handle input
    const [name,setName] = useState("fakhrilkak")
    const [email,setEmail] = useState("fakhrilak23@gmail.com")
    //////////////////////////////////////////////////////////////////
   

    ///////////////////methond untuk post,lo bisa lanjut liat di action reduxnya
    const Onclik=()=>{
        ///////////////dari action redux, punya 2 parameter name dan email
         getUser(name,email)
        //////////////////////////////////////////////////////////////////
    }
    ////////////////////////////////////////////////////////////////////////////

    /////////////ini contoh method handle dispatch lo bisa dispatch dimana aja,
    /////////////tidak disarankan karena gak rapi
    const Clear=()=>{
        dispatch({
            type:"CLEAR"
        })
    }
    ////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <h1>SEMANGAT BELAJAR YA</h1>
            <div>
                <input
            placeholder="Name"
            value = {name}
            onChange={(e)=>setName(e.target.value)}
            />
            </div>
            <div>
                <input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            </div>

            <div>
                <button
                onClick={()=>Onclik()}
                >SUBMIT</button>
            </div>

            {loading == true? <h1>Isi nama dan email lalu submit</h1>:
            <div>
                <div>
                    <h5>{users._id}</h5>
                </div>
                <div>
                    <h5>{users.name}</h5>
                </div>
                <div>
                    <h5>{users.email}</h5>
                </div>
                <button
                onClick={()=>Clear()}
                >
                    Clear data
                </button>
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    home : state.home
});

export default connect(mapStateToProps, {getUser})(Home);


import './assets/css/activitylist.scss';
import React , { useState, useEffect } from 'react'
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import Aos from 'aos';

import Modal from '../modal/modal'
import Axios from 'axios';

function Secondpage({match,location,history}) {

    const [detail_id,set_deatail_id] = useState()
    const [modal, setmodal] = useState(false)

    const id = useParams().id
    // console.log(history)
    // let id = history.location.pathname.split('/activity/')[1]
    
    const [data, setdata] = useState()
    const baseurl = 'http://3.35.43.53/'

    useEffect(() => {
        getproject()
    }, [])

    const getproject = async () => {
        await Axios.get(baseurl+ "api/v1/activity/" + id + '/', {
        }).then((response) => {
            console.log(response.data)
            setdata(response.data)
        })
            .catch((error) => {
                console.log(error)
            });
    }
    const click_img = (e,id) =>{
        e.preventDefault();
        set_deatail_id(id)
        setmodal(!modal)
    }

    useEffect(()=>{
        console.log('세컨드',detail_id)
    },[detail_id])



    const Print_box = () => {
        const arr = []
        data.data.map((v) => {
            arr.push(
                <div className='large_box'>
                    <img onClick={(e) => click_img(e,v.id)} className='img_box' src={baseurl + v.image}></img>
                    <div className='text_box'>
                        {v.title}
                    </div>
                </div>
            )
        })
        return (
            <>
                {arr}
            </>
        )
    }

    Aos.init()
    return (
        <div data-aos="flip-up">
            {modal == true ? <Modal setmodal={setmodal} detail_id={detail_id}/> : ''}
            {  data != undefined ?
                <>
                    <div className='title'>
                        <h1 >
                            {data.description}
                        </h1>
                    </div>
                    <div className="main_box">
                        <Print_box />
                    </div>
                </> : ''}
        </div>
    );
}

export default Secondpage;

import './assets/css/activities.scss';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Aos from 'aos';
import React , { useState, useEffect } from 'react'


function Firstpage({match}) {
    console.log(match)
    const baseurl = 'http://3.35.43.53/'
    const [data, setdata] = useState()

    useEffect(() => {
        getproject()
    }, [])

    const getproject = async () => {
        console.log('실행')
        await Axios.get(baseurl + "api/v1/activity/", {
        })
            .then((response) => {
                console.log(response.data)
                setdata(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const Showimg = () => {
        const arr = []
        let prev = 0
        data.map((v) => {
            if (prev != v.month) {
                prev = v.month
                arr.push(
                    <>
                        <div className='line'>
                            {v.year}년 {v.month}월
                        </div>
                        <div className='line_box'>
                            {data.map((a) => {
                                if (a.month == prev) {
                                    return (
                                        <div key={a.id} className='project_box'>
                                            <Link to={`/activity/${a.id}`}>
                                                <img className='project_box_img' src={baseurl + a.thumbnail}></img>
                                            </Link>
                                            <div className='project_box_text'>
                                                <div>
                                                    {a.title}
                                                </div>
                                                <div>
                                                    {a.year} 년 {a.month} 월
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            })}
                        </div>
                    </>
                )
            }
        })
        return (
            <div >
                {arr}
            </div>
        )
    }

    Aos.init()
    return (
        <div data-aos="flip-down">
            {data != undefined ? <Showimg></Showimg> : ''}
        </div>
    );
}

export default Firstpage;

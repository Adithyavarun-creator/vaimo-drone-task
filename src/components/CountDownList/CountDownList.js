import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import {FaClock} from 'react-icons/fa'
import './CountDownList.styles.css'

const CountDownList = () =>{
const history = useHistory()

    const [time,setTime] = useState("")
    useEffect(()=>{
        let countdowndate = new Date("Nov 11,2021 06:34:00").getTime()
        //updating every second
        let updatesecond = setInterval(function(){
            //for today date and time
            let todaydate = new Date()
            //finding difference between now and countdays
            let difference = countdowndate - todaydate

            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);
            setTime(days +  "days "  + hours +  "h "  + minutes + "min " + seconds + "sec")
        
            if(difference < 0){
                clearInterval(updatesecond)
                setTime("Redirecting to your website")
                history.push('https://www.vaimo.com/')
            }
        },1000)
    },[])

    return(
        <div className="font-time">
           <FaClock className="clock-icon"/> {time} 
        </div>
    )
}



export default CountDownList
import { useEffect } from "react"
import {  useNavigate } from 'react-router-dom'



function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    }, [])

    return (
        <div className="card">
            <button style={{backgroundColor:"  rgb(245, 247, 121)"}}>HOME</button>
            <button style={{backgroundColor:"  rgb(245, 247, 121)"}}>ABOUT US</button>
            <button style={{backgroundColor:"  rgb(245, 247, 121)"}}>ASK QUESTON</button>

            <div>
                <span> {localStorage.getItem('EMAIL')} </span>
                <button style={{backgroundColor:" rgb(245, 247, 121)"}}
                    onClick={() => {
                        localStorage.clear()
                        navigate('/signin')
                    }}
                > LOGOUT </button>
            </div>
        </div>
        
    )
}


export default Home
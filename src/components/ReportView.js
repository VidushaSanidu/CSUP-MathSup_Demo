import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import logo1 from '../img/logo1.jpg'
import { User } from '../App';


function ReportView() {

    const user =useContext(User);
    const [admin,setAdmin] = useState();
    useEffect(()=> {
        setAdmin(user);
    },[user]);
    


    const history = useHistory();
    const {id} = useParams();

    const { data : report} = useFetch(
        'https://jsonplaceholder.typicode.com/posts/'+id);

    const deleteReport= ()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
            method : "DELETE",
        }).then(()=>{
            alert('Report has been deleted')
            history.push('/');

        })
        
    }
    return (
        <div className='content'>
            {report ? (
                <>
                    <img src={logo1} alt='cover' ></img>
                    <div className='header-text'>
                        <h1>{report.title}</h1>
                        <div className='btn-section'>
                            {admin ? (
                                <button onClick ={deleteReport} className='delete'>
                                    delete
                                </button>
                            ):(
                                <></>
                            )}
                        </div>
                    </div>
                    <p>{report.userId}</p>
                    <div className='text-content'>
                        <p>{report.body}</p>
                    </div>
                </>
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default ReportView


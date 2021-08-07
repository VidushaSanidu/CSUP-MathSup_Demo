import React,{ useState } from "react"
import { useHistory } from "react-router-dom";

function AddReport() {

    const [title,setTitle] = useState('');
    const [userId,setWriter] = useState('');
    const [body,setBody] = useState('');
    const history = useHistory();

    const addreport= (e) => {
        e.preventDefault();
        const newreport = {title,userId,body};
    
        
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {'content-type': 'application/json'},
        body : JSON.stringify(newreport),
    })
        .then((response)=> response.json())
        .then((json) => {
            alert('Report has been added.');
            history.push('/');
        });

    };

    return (
        <div className="add-post">
            
                <h2>Add new Report</h2>
            
            <div>
                     <form onSubmit={addreport}>

                    <label>add title</label>
                    <input type='text' value ={title}
                    onChange={(e) => setTitle( e.target.value)}
                    />

                    <label>Writer's Name</label>
                    <input type='text'
                    value ={userId}
                    onChange={(e) => setWriter( e.target.value )}
                     />

                    <label>add body</label>
                    <textarea type='text'
                    value ={body}
                    onChange={(e) => setBody( e.target.value ) }/>

                    <button>Publish</button>
                    </form>
            </div>
            
             

            
        </div>
    )
}

export default AddReport;

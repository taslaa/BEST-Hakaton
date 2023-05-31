import { useEffect, useState } from "react";

function ExampleForm() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        console.log("I have the data and i can send it to API.");
    }

    useEffect(()=>{
        console.log("Name:" +name +", email: "+email + ", message: " +message)
    },[name,email,message])

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h6>Moja prva forma</h6>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Ime:</label>
                        <input value={name} onChange={((e) => { setName(e.target.value) })} className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input value={email} onChange={((e) => { setEmail(e.target.value) })} className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea value={message} onChange={((e) => { setMessage(e.target.value) })} className="form-control" type="text" ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="mt-3 btn btn-primary">Spremi promjene</button>
                    </div>
                </form>
            </div>
        </div>


    );
}

export default ExampleForm;
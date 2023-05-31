import React, { useState, useEffect } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: 'Petar',
        lastName: 'Lukic',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({
        firstNameError: undefined,
        lastNameError: undefined,
        emailError: undefined,
        messageError: undefined
    });

    const handleChange = (e) => {
        var newObjectWithChange = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newObjectWithChange);
    }
    const validateForm = () => {
        var newErrors = { ...errors };

        var firstName = formData.firstName;
        if (firstName == undefined || firstName == "" || firstName.length == 0) {
            newErrors.firstNameError = "Upisite ispravno ime";
        } else {
            newErrors.firstNameError = null;
        }
        const lastName = formData.lastName;
        if (!lastName || lastName.length === 0) {
            newErrors.lastNameError = "Upisite ispravno prezime";
        } else if (lastName.length < 2) {
            newErrors.lastNameError = "Skoro ispravno, mora biti duze od 2 karaktera";
        }
        else {
            newErrors.lastNameError = null;
        }

        const email = formData.email;
        if (!email || email.length < 4) {
            newErrors.emailError = "Unesite malo duzi email.";
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            newErrors.emailError = "Email nije u ispravnom formatu.";
        }
        else {
            newErrors.emailError = null;
        }

        setErrors(newErrors)

    }

    useEffect(() => {
        validateForm();
    }, [formData])

    return (
        <div className="card mt-5">
            <div className="card-header"><h6>Conctact form</h6></div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label >First name</label>
                        <input name="firstName" onChange={handleChange} value={formData.firstName} type="text" className="form-control" />
                        {errors.firstNameError && <span className='text-danger'>{errors.firstNameError}</span>}
                    </div>
                    <div className="form-group">
                        <label >Last name</label>
                        <input name="lastName" onChange={handleChange} value={formData.lastName} type="text" className="form-control" />
                        {errors.lastNameError && <span className='text-danger'> {errors.lastNameError}</span>}
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input name="email" type="email" onChange={handleChange} value={formData.email} className="form-control" />
                        {errors.emailError && <span className='text-danger'>{errors.emailError} </span>}
                    </div>
                    <div className="form-group">
                        <label >Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" ></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

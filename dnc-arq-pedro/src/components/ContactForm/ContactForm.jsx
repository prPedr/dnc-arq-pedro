import { useState, useEffect, use } from "react"

// CSS
import "./ContactForm.css"

// COMPONETS
import Button from "../Button/Button"

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isFormValid, setIsFormValid] = useState(false)

    const submitForm = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            null
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        const isValid = formData.name.trim() && 
        formData.email.trim() && 
        isValidEmail(formData.email) && 
        formData.message.trim() && 
        formData.message.trim()

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="contact-form d-flex fd-column al-center">
            <h2>We love meeting new people and helping them.</h2>
            <form>
                <div className="form-group d-flex">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        onChange={handleChange}
                    />

                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group d-flex">
                    <textarea
                        className="form-input"
                        name="message"
                        id="message"
                        placeholder="Mensagem *"
                        onChange={handleChange}
                        rows="4">
                    </textarea>
                </div>
                <div className="al-center form-group jc-end d-flex">
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid}>Enviar</Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
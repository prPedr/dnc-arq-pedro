import { useState, useEffect } from "react"

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
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({...formData, access_key: "9754f4a0-4cb4-48cb-b9c9-50e5d5867bc3"})
                })

                if (response.ok) {
                    setFormSubmitted(true)
                } else {
                    alert("Erro ao enviar o formulário. Por favor, tente novamente.")
                }
            } catch (e) {
                alert("Erro: ", e)
            } finally {
                setFormSubmitLoading(false)
            }
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
            <form onSubmit={handleSubmit}>
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
                    {formSubmitted && <p className="text-primary">Sucesso</p>}
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>Enviar</Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
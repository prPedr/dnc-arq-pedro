import { useState, useEffect } from "react"
import { AppContext } from "./AppContext"
import { getApiData } from "../services/apiServices.js"

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState("br")
    const [languages, setLanguages] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData("webtext")
                setLanguages(getTexts)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        fetchLanguages()
    }, [])

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    )
}

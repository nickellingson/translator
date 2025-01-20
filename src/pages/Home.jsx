import { useState } from 'react';
import { hitOpenAi } from '../services/OpenAiApi';
import "../Home.css"

function Home () {

    const [openAiData, setOpenAiData] = useState([])
    const [submission, setSubmission] = useState("")
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const apiData = await hitOpenAi()
    //             setOpenAiData(apiData)                  
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     loadData()
    // })

    const handlePrompt = async (e) => {
        e.preventDefault();
        // setOpenAiData([])
        setLoading(true)
        try {
            console.log(submission)
            const res = await hitOpenAi(submission)
            setOpenAiData(res)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    return (
        <div>
            <h1 className='site-title'>
                Translator Genius
            </h1>
            <h2>Input phrase and language to translate too</h2>
            <form onSubmit={handlePrompt} className="search-form">
                <input type="text"
                placeholder="Translate here"
                className="search-input"
                value={submission}
                onChange={(e) => setSubmission(e.target.value)}
                />
                <button type="submit" className="search-button">Translate</button>
            </form>
            {loading ? (<div className="loading">Loading... </div>):
            (<p className="response">{openAiData}</p>)}
        </div>
    )
}

export default Home
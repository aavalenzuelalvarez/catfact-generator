import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`

export function App () {
    const [fact, setFact] = useState('lorem ipsum cat fact whatever')
    const [imageURL, setImageURL] = useState()

    useEffect(() =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)

                const firstWord = fact.split(' ',3).join(' ')
                console.log(firstWord)
                
                fetch(`https://cataas.com/cat/says/${firstWord}`)
                    .then(response =>{
                        const {url} = response
                        setImageURL(url)
                    })
            })
    }, [])

    return(
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt="image that says the first word with a cat"></img>}
        </main>
    )
}
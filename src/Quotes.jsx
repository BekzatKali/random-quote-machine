import React, {useState} from "react";
import QuotesData from "./QuotesData";
import Twitter from "../public/twitter.svg"
import {useEffect} from "react";

export default function Quotes() {
    const [quote, setQuote] = useState("")
    const [quoteAuthor, setQuoteAuthor] = useState("")
    const [forAnyColor, setForAnyColor] = useState({})

    useEffect(() => {
        const randomQuote = QuotesData[Math.floor(Math.random() * QuotesData.length)]
        setQuote(randomQuote.quote)
        setQuoteAuthor(randomQuote.author)
        setForAnyColor(randomQuote.commonColor)
    }, []);

    function newQuote() {
        const randomQuote = QuotesData[Math.floor(Math.random() * QuotesData.length)]
        setQuote(randomQuote.quote)
        setQuoteAuthor(randomQuote.author)
        setForAnyColor(randomQuote.commonColor)
    }

    return (
        <div style={{backgroundColor: forAnyColor}} className="AppForQuotesMainContainer">
            <div id="quote-box" >
                <div style={{color: forAnyColor}} className="Quotes">
                    <h2 id="text">{quote}</h2>
                    <p id="author">- {quoteAuthor}</p>
                    <div className="quotes-btn-wrapper">
                        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`} 
                        target="_blank" style={{backgroundColor: forAnyColor}} id="tweet-quote">
                            <img className="logoTwitterImg" src={Twitter}/>
                        </a>
                        <button style={{backgroundColor: forAnyColor}} id="new-quote" onClick={newQuote}>New Quote</button>
                    </div>
                </div>
                <p className="appCreatorName">By Bekzat Kali</p>
            </div>      
        </div>
    )
}




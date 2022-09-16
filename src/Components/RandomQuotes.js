import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RandomQuotes = () => {

    const [ quote, setQuote ] = useState("");
    let apiUrl = "https://api.quotable.io/random?tags=education|science|success";

    useEffect(() => {
        const fetchQuote = setInterval(() => {
            axios.get(apiUrl).then(response => {
                setQuote(response.data);
            });
        }, 20000);

        return () => clearInterval(fetchQuote);
    }, [apiUrl]);
   
    return (
        <div className='quotes flex-center bg-blue-400 pt-12 pb-16 md:py-20 px-2 md:px-8'>
            <div className="h-64 flex-center justify-start gap-9 text-center">
                <blockquote className="text-white text-3xl md:text-4xl italic">{quote ? `"${quote.content}"` : "\"Learning is not attained by chance; it must be sought for with ardor and attended to with diligence\""}</blockquote>
                <p className='quote-author text-gray-200 uppercase'> - {quote ? quote.author : "ABIGAIL ADAMS"}</p>
            </div>
        </div>
    )
}

export default RandomQuotes;
import React from 'react'

const WordLimit = ({text , limit}) => {
    const wd = text.split(' ');
    const truncatedText = wd.slice(0, limit).join(' ');
  
    return <>{truncatedText}</>;
}

export default WordLimit
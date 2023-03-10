import React from 'react'
import "./Widget.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Widget = () => {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
   )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Valorant", "Oni 2.0")}
        {newsArticle("NextJS", "V13")}
        {newsArticle("Gaming News!", "Top games of the year")}
    </div>
  )
}

export default Widget
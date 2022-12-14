import React from 'react';
// HTML Bar Graph Creator
const HtmlBarCreator = (objArr:any[]):JSX.Element => {
    // Do dah mathy stoof
    const defaultMargin: number = 0
    const margin: number = 20
    let width:number = 0

    const bars = objArr.map((obj:any, i:any)=>{
        const {name, percentage, color} = obj
        const styles = {
            height:`${percentage}%`,
            width:"20px",
            left: `${defaultMargin + (margin * i)}px`,
            backgroundColor: `${color}`,
        }
        width = margin * (i+1)
        return (<div className='graph' id={name} style={styles} title={name}>
            <div className='bar--name'>{name}: {percentage}%</div>
        </div>)
    })

    const bar = {
        width: `${width}px`
    }

    return (
        <div className="barplot" style={bar}>
            {bars}
        </div>
    )
}

export default HtmlBarCreator
import React from 'react'


const DateDisplay = props => {
    let date = new Date(props.date)
    return (
    <>{date.toDateString()}</>
  )
}
export default DateDisplay
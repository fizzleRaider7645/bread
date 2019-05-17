import React from 'react'


const DateDisplay = props => {
    let date = new Date(props.date)
    return (
    <React.Fragment>{date.toDateString()}</React.Fragment>
  )
}
export default DateDisplay
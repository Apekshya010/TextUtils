import React from 'react'

const Alert = (props) => {
  return (
    <div style={{height:50}}>
    {props.alert && <div className="alert alert-success" role="alert">
        {props.alert.message}
        </div>}
        </div>
  )
}
export default Alert;
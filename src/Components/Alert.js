import React from 'react'

function Alert(props) {
    const Capatilize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);

    }
  return (
    <div style={{ height: "50px" }} className="sticky-top">

   { props.alert && (
      <div 
        className={`alert alert-${props.alert.type} alert-dismissible fade show sticky-top`} 
        role="alert"
        style={{ backgroundColor: '#CBDCEB', color: props.alert.type === 'success' ? 'green' : 'red' }}
      >
        <strong>{Capatilize(props.alert.type)}</strong>: {props.alert.msg}
       
      </div>
      
    )}
    </div>
  )
}

export default Alert

import React from 'react'

export default function TodoList (props) {
    return (
    <> 
    <div className="todostyle">
        <i className="fa fa-trash"
         aria-hidden="true" 
         onClick={()=>{
            props.onSelect(props.id);
         }}/>
    <li>{props.text}</li>
    </div>
    </>
    );
}


import React from 'react'

export default function BUTTON(props: any) {
    return (
        <div>
            <button className='btn btn-primary btn-md mb-4' onClick={props.GetValue}>{props.btnValue}</button>
        </div>
    )
}

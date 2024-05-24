import React from 'react';

export default function INPUT(props: {
    placeholder: string;
    inputValue: string;
    InputChange: (event:any) => void;
}) {
    return (
        <div className="input-group mb-3 border-primary">
            <input
                className="form-control mt-4 font-weight-bold"
                type="text"
                placeholder={props.placeholder}
                value={props.inputValue}
                onChange={props.InputChange}
            />
        </div>
    );
}

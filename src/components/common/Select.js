import React from 'react';

function Select(props) {
    return (
        <>
            <div className="field">
                <label htmlFor={props.id}>{props.label}</label>
                <select
                    id={props.id}
                    display="none"
                    type="select"
                    className="form-control"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                >

                    {props.authors.map((value, i) =>
                        <option
                            key={i}
                            value={value.authorId}
                        >
                            {value.name}
                        </option>

                    )}

                </select>
                {props.errors && (
                    <div className="alert alert-danger">{props.errors}</div>
                )}
            </div>
        </>
    );
}

export default Select;



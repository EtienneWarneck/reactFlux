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
                    // defaultValue="Select"
                    onChange={props.onChange}
                >
                    <option value="none">Select an Option</option>
                    {props.authors.map((value) =>
                        <option
                            key={value.authorId}
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



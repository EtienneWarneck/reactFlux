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

                    {props.authors.map((x, i) =>
                        <option
                            key={i}
                            value={x.authorId}
                            id={x.authorId}
                        >
                            {x.name}
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



import React from 'react';

function Select(props) {
    console.log("Select", props.value)
    return (
        <>
            <div className="field">
                <label htmlFor="author">Author</label>
                <select
                    display="none"
                    className="form-control"
                >
                    {
                        props.value.map((x) =>
                            <option
                                key={x.id}
                            >
                                {x.name}
                            </option>)
                    }
                </select>
            </div>
        </>
    );
}

export default Select;



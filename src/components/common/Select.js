import React from 'react';

function Select(props) {
    console.log("Select", props.authors[1].name)
    return (
        <>
            <div className="field">
                <label htmlFor="author">author</label>
                <select
                    display="none"
                    className="form-control"
                    name="authorId"
                    value={props.value}
                    onChange={props.onChange}
                >
                    {
                        props.authors.map((x) =>
                            <option key={x.id} >
                                {x.name}
                            </option>)
                    }
                </select>
            </div>
        </>
    );
}

export default Select;



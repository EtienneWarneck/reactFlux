import React from 'react';

function Select(props) {
    console.log("Select", props.authors)
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
                        props.authors.map((_author) =>
                            <option key={_author.id} >
                                {_author.name}
                            </option>)
                    }
                </select>
                {/* {props.errors.authorId && (
                    <div className="alert alert-danger">{props.errors.authorId}</div>
                )} */}
            </div>
        </>
    );
}

export default Select;



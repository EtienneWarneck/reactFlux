import React from 'react';

function Select(props) {
    // console.log("props.label =", props.label) //author
    // console.log("props.name =", props.name)//author
    // console.log("props.id =", props.id)//author
    // console.log("props.onChange =", props.onChange) //f()
    // console.log("props.authors =", props.authors) //array

    // console.log("props.authors =", props.authors) //array
    // console.log("props.authors =", props.authors) //array
    console.log("props.value =", props.value) //EMPTY

    return (
        <>
            <div className="field">
                <label htmlFor={props.id}>{props.label}</label>
                <select
                    id={props.id} //authorId
                    display="none"
                    type="select"
                    className="form-control"
                    name={props.name} //authorId
                    value={props.value} // authors.authorId
                    onChange={props.onChange} //f()
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
                {/* {props.errors && (
                    <div className="alert alert-danger">{props.errors}</div>
                )} */}
            </div>
        </>
    );
}

export default Select;



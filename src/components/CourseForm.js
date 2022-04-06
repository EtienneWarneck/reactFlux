import React from "react";
import TextInput from "./common/TextInput";
import Select from "./common/Select";

function CourseForm(props) {
    console.log("CourseForm", props.author)
    return (
        <form>
            <TextInput
                id="title"
                label="Title"
                name="title"
                className="form-control"
                value={props.course.title || ""}
            />
            <TextInput
                id="category"
                label="Category"
                name="category"
                value={props.course.category || ""}
                onChange={props.onChange}
            />

            <div className="form-group">
                <Select
                    id={props.author.id}
                    name={props.author.name}
                    onChange={props.onChange}
                    value={props.author}
                    className="form-control"
                />
            </div>

            <input type="submit" value="Save" className="btn btn-primary" />
        </form >

    );
}

export default CourseForm;
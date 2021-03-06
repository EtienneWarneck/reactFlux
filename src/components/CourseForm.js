import React from "react";
import TextInput from "./common/TextInput";
import Select from "./common/Select";
import PropTypes from "prop-types";
function CourseForm(props) {
    console.log("props.course", props.course)
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="title"
                label="Title"
                onChange={props.onChange}
                name="title"
                value={props.course.title}
                error={props.errors.title}
            />
            <Select
                id="authorId"
                label="Author"
                name="authorId"
                onChange={props.onChange}
                authors={props.authors}
                value={props.course.authorId || ""}
            />

            <TextInput
                id="category"
                label="Category"
                name="category"
                onChange={props.onChange}
                value={props.course.category}
                error={props.errors.category}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default CourseForm;

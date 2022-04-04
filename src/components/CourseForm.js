import React from "react";
import { saveCourse } from "../api/courseApi";



function CourseForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <div className="field">
                    <input
                        id="title"
                        type="text"
                        name="title"
                        className="form-control"
                        value={props.course.title || ""}
                        onChange={props.onChange}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={props.onChange}
                        value={props.course.authorId}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <div className="field">
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="form-control"
                        value={props.course.category || ""}
                        onChange={props.onChange}
                    />
                </div>
            </div>

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default CourseForm;
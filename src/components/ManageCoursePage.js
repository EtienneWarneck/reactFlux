import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi"
// import * as authorApi from "../api/authorApi"
import { toast } from "react-toastify";

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});

    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    useEffect(() => {
        const slug = props.match.params.slug
        if (slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
        }
    }, [props.match.params.slug])



    function handleChange({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value
        })
    }

    const authors = [
        {
            "id": 1,
            "name": "Cory House"
        },
        {
            "id": 2,
            "name": "Scott Allen"
        },
        {
            "id": 3,
            "name": "Dan Wahlin"
        }
    ]



    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author ID is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved.");
        });
    }


    return (
        <>
            <h2>Manage Course</h2>
            {/* {props.match.params.slug} */}
            {/* {slug} */}
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                authors={authors}
                onSubmit={handleSubmit}
            />
        </>
    );
};


export default ManageCoursePage
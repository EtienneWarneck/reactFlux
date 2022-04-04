import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
    // console.log("props.match.params.slug", props.match.params.slug)
    // const { slug } = useParams()
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        authorId: null,
        category: ""
    })

    function handleChange({ target }) {
        //debugger
        setCourse({
            ...course,
            [target.id]: target.value
        })
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/* {props.match.params.slug} */}
            {/* {slug} */}
            <CourseForm course={course} onChange={handleChange} />
        </>
    );
};


export default ManageCoursePage
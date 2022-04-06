import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { getAuthors } from "../api/authorApi";

const ManageCoursePage = props => {
    // console.log("props.match.params.slug", props.match.params.slug)
    // const { slug } = useParams()
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        authorId: null,
        category: ""
    })

    const [author, setAuthor] = useState([])

    useEffect(() => {
        getAuthors().then(_author => setAuthor(_author));
    }, []);

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
            <CourseForm
                course={course}
                onChange={handleChange}
                author={author}
            />
        </>
    );
};


export default ManageCoursePage
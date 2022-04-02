import React from "react";
import { useParams } from "react-router-dom";

export default function ManageCoursePage() {
    // console.log("props.match.params.slug", props.match.params.slug)
    const { slug } = useParams()

    return (
        <>
            <h2>Manage Course</h2>
            {/* {props.match.params.slug} */}
            <h3>
                {slug}
            </h3>
        </>
    );
};



import React from "react";
import VerticalTabs from "../../components/Courses/AddCourseVerticalTabs";
import "./Course.css";
export default function AddCourse(props) {
    return (
        <div>
            <VerticalTabs
                tabs={["General Information", "Curriculum", "Test"]}
            />
        </div>
    );
}

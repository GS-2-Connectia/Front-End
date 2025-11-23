import { useContext } from "react";
import { CourseList } from "../components/course-list";
import { CoursesContext } from "../context/course-context";

export function Home() {
    const { courses } = useContext(CoursesContext);

    return (
        <div>
            <main>
                <h1 className="title">Home</h1>
                <CourseList courseList={courses} />
            </main>
        </div>
    )
}
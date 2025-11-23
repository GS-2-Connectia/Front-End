import type { Course } from "../types/course";
import { CourseResume } from "./course-resume";

interface CourseListProps {
  courseList: Course[];
}

export function CourseList({ courseList }: CourseListProps) {
  return (
    <>
      {courseList.map((value) => {
        return <CourseResume course={value} />;
      })}
    </>
  );
}

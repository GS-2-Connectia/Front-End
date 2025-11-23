import { useEffect, useState } from "react";
import { API_CONNECTIA } from "../api/connectia";
import { CourseCard } from "../components/course-card";
import type { Course } from "../types/course";

export function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch(`${API_CONNECTIA}/categorias`)
      .then((data) => data.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <header>
        <h2 className="font-bold text-3xl text-green-800">Cursoss</h2>
      </header>

      <main className="w-full flex flex-col justify-center items-center gap-3">
        {courses.map((value) => {
          return <CourseCard course={value} />;
        })}
      </main>
    </div>
  );
}

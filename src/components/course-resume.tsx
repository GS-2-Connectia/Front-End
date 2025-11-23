import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../context/course-context";
import type { Course } from "../types/course";

interface CourseResumeProps {
  course: Course;
}

export function CourseResume({ course }: CourseResumeProps) {
  const { removeCourse } = useContext(CoursesContext);

  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 mb-3 bg-white">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{course.nmCurso}</h2>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            to={`/Course/${course.idCurso}`}
            state={{ course }}
            className="text-blue-600 font-bold hover:underline rounded border border-blue-600 p-2"
          >
            detalhes
          </Link>

          <button
            onClick={() => removeCourse(course.idCurso)}
            className="bg-red-600 border text-white rounded p-2"
          >
            Remover treino
          </button>
        </div>
      </div>

      <h3>Data: {course.dtInicio}</h3>
      <p>Descrição: {course.dsCurso}</p>
    </div>
  );
}

import type { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col bg-sky-200 border border-sky-400 rounded-xl py-4 px-8 w-3/5">
      <p className="font-bold text-gray-500">Nome: {course.nmCurso}</p>
      <p className="font-bold text-gray-500">
        Quantidade: {course.tpConteudo}
      </p>
      <p className="font-bold text-gray-500">Valor: {course.stsCurso}</p>

      <div>
        <p className="font-bold">Categoria</p>

        <p className="font-bold">Codigo: {course.idCurso}</p>
        <p className="font-bold">Nome: {course.nmCurso}</p>
      </div>
    </div>
  );
}

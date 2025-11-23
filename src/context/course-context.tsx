import Cookies from "js-cookie";
import { createContext, useCallback, useState } from "react";
import { API_CONNECTIA } from "../api/connectia";
import type { AuthUser } from "../types/auth-user";
import type { Course } from "../types/course";

interface CourseContextProps {
  Courses: Course[];
  saveCourses: (Courses: Course) => Promise<void>;
  removeCourse: (id: string) => Promise<void>;
  fetchCourses: () => Promise<void>;
}

export const CoursesContext = createContext<CourseContextProps>(
  {} as CourseContextProps
);

interface CoursesProviderProps {
  children: React.ReactNode;
}

export function CoursesProvider({ children }: CoursesProviderProps) {
  const [Courses, setCourses] = useState<Course[]>([]);

  const saveCourses = useCallback(async (value: Course) => {
    await fetch(`${API_CONNECTIA}/Courses`, {
      method: "POST",
      body: JSON.stringify(value),
    });

    await fetchCourses();
  }, []);

  const fetchCourses = useCallback(async () => {
    // const storage = localStorage.getItem("user");

    const storage = Cookies.get("user");

    if (!storage) {
      throw new Error("Usuario não está autenticado");
    }

    const user: AuthUser = JSON.parse(storage);

    const response = await fetch(`${API_CONNECTIA}/Courses?userId=${user.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    setCourses(data);
  }, []);

  const removeCourse = useCallback(async (id: string) => {
    await fetch(`${API_CONNECTIA}/Courses/${id}`, {
      method: "DELETE",
    });

    await fetchCourses();
  }, []);

  return (
    <CoursesContext.Provider
      value={{
        Courses,
        saveCourses,
        removeCourse,
        fetchCourses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

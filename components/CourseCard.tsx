import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="course-image-wrap">
        <Image src={course.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" className="course-image" />
        {course.featured && <span className="course-badge">Popular</span>}
        <button className="save-button" aria-label={`Save ${course.title}`}>♡</button>
      </div>
      <div className="course-content">
        <div className="course-meta">
          <span>{course.category}</span>
          <span className="rating"><Star size={13} fill="currentColor" /> {course.rating}</span>
        </div>
        <h3>{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-bottom">
          <strong>{course.price}</strong>
          <span>{course.students} students</span>
          <span className="course-arrow"><ArrowUpRight size={16} /></span>
        </div>
      </div>
    </article>
  );
}

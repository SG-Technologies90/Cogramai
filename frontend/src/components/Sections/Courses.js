import { useState, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { courses, classFilters } from '../../data/courses';

function CourseCard({ course, index }) {
  const tagClass =
    course.tag === 'live'    ? 'tag-live'    :
    course.tag === 'popular' ? 'tag-popular' :
                               'tag-new';

  return (
    <div
      className={`course-card reveal reveal-delay-${(index % 4) + 1}`}
      data-class={course.classNum}
    >
      <div className={`course-thumb ${course.thumbClass}`}>
        <div className="course-thumb-bg">{course.emoji}</div>
        <span className={`course-tag ${tagClass}`}>{course.tagLabel}</span>
      </div>

      <div className="course-body">
        <div className="course-class-label">
          Class {course.classNum} · {course.subject}
        </div>
        <div className="course-title">{course.title}</div>
        <div className="course-lectures">
          {course.lectures} lectures · {course.hours} hrs
        </div>
        <div className="course-meta">
          <div className="course-price">{course.price}</div>
          <div className="course-rating">
            ⭐ {course.rating}{' '}
            <span style={{ color: 'var(--text-dim)' }}>({course.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? courses
      : courses.filter((c) => c.classNum === activeFilter);

  return (
    <section id="courses">
      <SectionHeader
        tag="📚 Curriculum"
        title="Explore Our"
        highlight="Courses"
        subtitle="Expertly designed curriculum for Class 6 through 12 — covering every subject with depth and clarity."
      />

      <div className="courses-layout">
        {/* Sidebar Filter */}
        <div className="class-filter reveal reveal-delay-1">
          <div className="class-filter-title">Filter by Class</div>
          {classFilters.map((f) => (
            <button
              key={f.value}
              className={`class-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="courses-grid">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

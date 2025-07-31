import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: 'React Basics', duration: '3 weeks' },
    { id: 2, name: 'Advanced React', duration: '4 weeks' }
  ];

  return (
    <div>
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.duration}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;

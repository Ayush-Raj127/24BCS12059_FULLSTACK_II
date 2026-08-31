import React from 'react';

export const Profile = React.memo(function Profile({ student }) {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>{student.email} | {student.year}</p>
    </div>
  );
});
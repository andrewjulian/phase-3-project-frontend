import React from "react";
import AssignmentCard from "./AssignmentCard";

const ClassAssignments = ({assignments, onClassSelect, selectedClass}) => {

  const fullListOfClasses = assignments.map((assignment) => {
    return (
     assignment.category
    )
  });

  const apprevListOfClasses = [...new Set(fullListOfClasses)]

  const listOfClasses = apprevListOfClasses.map((category, id) => {
    return (
      <option key={id} value={category}>{category}</option>
    )
  });

  const classAssignments = assignments.filter(
    (assignment) => assignment.category == selectedClass
  );

  const displayClassAssignments = classAssignments.map(
    (assignment, id) => {
      return (
        <AssignmentCard assignment={assignment} key={id} />
      );
    }
  );
  
  return (
    <div>
      <select onChange={onClassSelect} defaultValue="" >
        <option value="" disabled>Choose a Class...</option>
        {listOfClasses}
      </select>
      {displayClassAssignments}
    </div>
  )
}

export default ClassAssignments
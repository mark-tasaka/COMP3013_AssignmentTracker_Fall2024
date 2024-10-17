import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignment } from "./type/type";

//Mark Tasaka
//Lab 3

/*
type Assignment = {
  id: number;
  name: string;
  isComplete: boolean;
}*/

function App() {
  const[assignment, setAssignment] = useState<TAssignment[]>([]);
  
  const addAssignment = (theAssignment: TAssignment[]) => { 
    setAssignment([...assignment, {id: theAssignment.length + 1, name: "", isComplete: false}])
  }

  const hasCompleted = (isComplete: boolean, id:number) =>{
    if(isComplete === false)
    {
      isComplete = true;
    }

    alert("The Status of complete  at position " + id + " is " + isComplete)

  }

  const deleteAssignment = (id: number) => {
    const assignmentNew = [...assignment];
    assignmentNew.splice(id, 1);
    setAssignment(assignmentNew);
  }


  return (
    <>
    <Header addAssignment={addAssignment}/>
    <Assignments  assignment={assignment} deleteAssignment={deleteAssignment}  hasCompleted={hasCompleted}/>
    </>
  );
}

export default App;

/*

      <Header addAssignment={addAssignment}/>
      <Assignments  assignment={assignment} deleteAssignment={deleteAssignment}  hasCompleted={hasCompleted}/>
*/
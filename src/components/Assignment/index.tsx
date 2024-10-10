import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from "react";
import React from "react";

//type Props2 = { name: Assignments.title,  }

type Props = {name: string, completed: boolean, id: number, deleteAssignment: (id: number) => void, hasCompleted: (completed: boolean, id: number) => void}



export function Assignment({name, completed, id, deleteAssignment, hasCompleted}: Props) {

  //const [completedCount, setCompletedCount] = useState(0)
  //const [theComplete, setTheComplete] = useState(completed)

 // alert("theComplete is" + theCompleted)

  return (
    <div className={styles.assignment}>
      {/* create a turniary for button */}
      <button  onClick= {() => hasCompleted(completed, id)} className={styles.checkContainer}>
        <div />
      </button>

     {completed ?  <p className={styles.textCompleted}>{name}</p> :  <p>{name}</p>}

      <button onClick={() => deleteAssignment(id)} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
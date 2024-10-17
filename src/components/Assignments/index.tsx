import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

/*
type TAssignment = {
  id: number;
  name: string;
  hasComplete: boolean;
}*/

export function Assignments({assignments, deleteAssignment, hasCompleted}: any) {
  // hasCompleted(assignments.completed)
   return (
     <section className={styles.assignments}>
       <header className={styles.header}>
         <div>
           <p>Created Assignments</p>
           <span>{assignments.length}</span>
         </div>
 
         <div>
           <p className={styles.textPurple}>Completed Assignments</p>
           <span>{} of {assignments.length}</span>
         </div>
       </header>
 
       <div className={styles.list}>
        {assignments.map((assignment: any) => 
           <Assignment name={assignment.title} completed={assignment.completed} id={assignment.id}  deleteAssignment={deleteAssignment}  hasCompleted={hasCompleted}  />
        )}
       </div>
     </section>
   );
 }
 
 
 
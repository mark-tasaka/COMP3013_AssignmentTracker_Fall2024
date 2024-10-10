import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header(addAssignment: any) {
  const [content, setContent] = useState("");
  let buttonCondition = (content.length === 0 ? true: false);
  let cursorCondition = (buttonCondition === true ? "not-allowed": "pointer")
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
           <input onChange={(e) => setContent(e.target.value)} placeholder="Add a new assignment" type="text" />
            <button onClick={(e) => { e.preventDefault(); addAssignment(content) }} style={{cursor: cursorCondition}} disabled={buttonCondition}>
              Create <AiOutlinePlusCircle size={20} />
            </button>
      </form>
    </header>
  );
}

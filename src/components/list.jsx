import React from "react";
import "../css/list.css";
import { DeleteForever,CheckCircleOutline,CheckCircle } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContexte } from "../hook/useTheme";

function List({task,deleteTask,completeTask}){

    const {theme} = useContext(ThemeContexte);

     return(
        <>
            {task.map(item=>(
                <div key={item.id} className={`taskWrapper ${theme ? "dark":""}`}>
                    <div className="text-section">
                        <span className="tittle-field">{item.tittle}</span>
                        <span className="text-field">{item.text}</span>
                    </div>
                    <div className="icon-section">
                        <div className="delete"
                            onClick={()=>{deleteTask(item.id)}}
                        >
                            <DeleteForever style={{color:"red",fontSize:18}}
                            />
                        </div>
                        <div className="complete"
                             onClick={()=>{completeTask(item.id)}}
                        >
                            {item.isComplete ? <CheckCircle
                                    style={{color:"black",fontSize:18}}/> : <CheckCircleOutline
                                                        style={{color:"black",fontSize:18}}
                                    />}
                        </div>

                    </div>
                </div>
            ))}
        </>
     );
}

export default List;
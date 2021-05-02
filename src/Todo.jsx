import React from "react";

const Todo = (props)=>{
    const {status,text} = props;
    const [cstatus, setstatus] = React.useState(status);
    const changestate = ()=>{
        
      if (cstatus){//true
          setstatus(false);
      }else{//false
        setstatus(true);
      }
      
    }
    return(
        <div className="todo" onClick={changestate}>
            <span className={cstatus ? ("spanc") : ("spannc")}> {cstatus ? ("Completed") : ("not yet Completed")}</span>
            <h2>{text}</h2>
        </div>
    );
}

export default Todo;
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";

const TaskDetail = ({
    id,
    comments,
    task,
    isComplete,
    groups,
    setTaskCompletion,
    setTaskGroup,
    setTaskName

})=>{
    return(
        <div className="card p-3 col-6">
            <div>
                <input 
                    id="name" 
                    type="text" 
                    defaultValue={task.name} 
                    onChange={setTaskName}
                    className="form-control-lg" 
                />
            </div>
            <div>
                <button className="btn btn-primary mt-2" onClick={()=>setTaskCompletion(id, !isComplete)}>
                    {isComplete? `Reopen` : `Complete`}
                </button>
            </div>
            <div className="mt-3">
                <select className="form-control" id="selectG" onChange={setTaskGroup} value={task.group}>
                    {groups.map(group=>(
                        <option key={group.id} value={group.id}>
                            {group.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <Link to="/dashboard">
                    <button className="btn btn-primary mt-2">Done</button>
                </Link>
            </div>
        </div> 
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;

    return{
        id,
        task,
        isComplete:task.isComplete,
        groups
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const id = ownProps.match.params.id;
    return{
        setTaskCompletion(id, isComplete){
            dispatch(mutations.setTaskCompletion(id,isComplete));
        },
        setTaskGroup(e){
            const group = document.getElementById("selectG").value;
            dispatch(mutations.setTaskGroup(id,group));
        },
        setTaskName(e){
            const name = document.getElementById("name").value;
            dispatch(mutations.setTaskName(id,name));
        }
    }
}

export const ConnectTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
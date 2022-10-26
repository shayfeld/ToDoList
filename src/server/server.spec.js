import { addNewTask, updateTask } from "./server";

(async function myFunc(){
    addNewTask({
        name:"my task",
        id:"123456"
    });
    updateTask({
        id:"123456",
        name:"my task - updateed !!"
    });
})();

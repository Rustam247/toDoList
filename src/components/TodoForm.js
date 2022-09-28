import { useState } from "react"

const TodoForm = () => {
    // useStates 
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([])
    const [input, setInput] = useState("");
    
    // function that will croosOut list
    const crossOutItem = (event) => {
        if(event.target.style.textDecoration) {
            event.target.style.removeProperty('text-decoration')
        } else {
            event.target.style.setProperty('text-decoration', 'line-through')
        }
    }

    // delete list funcrtion
    const deleteArray = () =>{
        setList2([])
    }
    
    //  input that dont let you push empty string
    const validateInput = () => {
        if(input.trim().length !== 0) {
            addItem()
        } else {
            return
        }
    }

    // click to add something to list
    const addItem  = (e) => {
        e.preventDefault();
        const temp = [...list];
        temp.push(input);
        setList(temp);
        setInput("");
    };

    // delete 1 item
    const deleteItem = (index) => {
        const temp = [...list]
        temp.splice(index, 1)
        setList(temp)
    }

    const completeItem = (index) => {
        const temp = [...list]; 
        const removedItem = temp.splice(index, 1); 
        setList(temp); 
      
        const temp2 = [...list2]; 
        temp2.push(...removedItem) 
        setList2(temp2) 
    };
    
    return (
        <div>
            <div>
                <form onSubmit={addItem}>
                    <input id="inputtoList" type="text" placeholder="Enter your" value={input} onChange={(e) => setInput(e.target.value)} required/>
                    <button onClick={validateInput}>Add</button>
                </form>
            </div>
            {list.map((item, index) => {
                return <p>
                    * {item} 
                    <button onClick={() => deleteItem(index)}>Delete</button>
                    <button id ="completeButton" onClick={completeItem}>Complete</button>
                    </p>
            })}
            <div>
                <h1>Complete Tasks</h1>
                {list2.map((item, index) => {
                return(
                    <div key={item} onClick={() => completeItem(index)}>
                        <p key={item} onClick={crossOutItem}>{item} </p>
                    </div>
                )})}
                <button button id = "clearList" onClick={deleteArray}>Clear Complete</button>
            </div>
        </div>
        
    );
};

export default TodoForm;
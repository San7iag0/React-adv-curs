import { useState } from "react";

interface ListGoalsProps {
    allGoals: { goal: string; by: string }[];
}

interface GoalFormProps {
    onAdd: (goal: { goal: string; by: string }) => void;
}

function GoalForm(props: GoalFormProps){
    const [formData, setFormData] = useState({goal: "", by:""});

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        console.log('changeHandler ', e.target.name, e.target.value);
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal:"", by:""});
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
            <input type="text" name="by" placeholder="By" value={formData.by} onChange={changeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    )
}
function ListGoals({ allGoals }: ListGoalsProps) {
    return (
        <ul>
            {allGoals.map((goal: any) => (
                <li key={goal.goal}>
                    <span>My Goal is to {goal.goal}, by {goal.by} </span>
                </li>
            ))}
        </ul>
    )
}
export default function Goal(){
    const [allGoals, setAllGoals] = useState<{ goal: string; by: string }[]>([]);
    function addGoal(goal: any) { setAllGoals([...allGoals, goal]); }
    
    return (
        <div>
            <GoalForm onAdd={addGoal} />
            <ListGoals allGoals={allGoals} />
        </div>
    )
}
import React, {useState} from 'react';
import App from '../App';

const it = [
    {name: "Puss", role: "ey"}
]



export default function AddMember(props) {
    console.log(props)


    const submit = (evt) => {
        evt.preventDefault();
    
        const newMember = {
            name: props.formValues.name.trim(),
            role: props.formValues.role.trim()
        }
        props.setPeople(props.people.concat(newMember));
        props.setFormValues(props.initialFormValues);
    }

    // const change = (evt) => {
    //     const {name,value} = evt.target;
    //     console.log(evt);
    //     props.setFormValues({...props.formValues, [name]: value});
    // }

    const change = (evt) => {
        const { name, value } = evt.target;
        // Spreads the formValues key value pairs into a new object,
        // then updates the [name] (variable coming from evt.target)
        // to value, coming from evt.target.
        console.log(evt)
        console.log(value);
        console.log(name);
        props.setFormValues({ ...props.formValues, [name]: value });
      }

    



    return (
        <form onSubmit={submit}>
            <label>Name</label>
            <input type="text" name="name" value={props.formValues.name} onChange={change}/>
            <label>Role</label>
            <input type="text" name="role"  value={props.formValues.role} onChange={change}/>
            <button>Submit</button>
        </form>
    )
}
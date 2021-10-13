import React, {useEffect, useState} from 'react';
import AddMember from './AddMember';

export default function Header(props) {
    
    return (
        <div className="topBar">
            <h3 className="title">{props.header}</h3>
            <div className="additionHeader">
                <AddMember setPeople={props.updatePeople} setFormValues={props.updateFormValues} formValues={props.formValues} people={props.people} initialFormValues={props.initialFormValues}/>
            </div>
        </div>
    )
}
import React from "react";

const Employee = ({name,department,role}) => {


    return (
        <>
        <div>Name: {name}</div>
        <div>Departament: {department}</div>
        <div>Role: {role}</div>
        </>
    )
}

export default Employee
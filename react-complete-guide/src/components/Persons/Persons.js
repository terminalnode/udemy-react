import React from "react";
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person, id) =>
  <Person
    key={ person.id }
    click={ () => props.click(id) }
    changed={ (event) => props.changed(event, person.id) }
    name={ person.name }
    age={ person.age } />
);

export default persons;

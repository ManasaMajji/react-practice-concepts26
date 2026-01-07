import { Fragment } from "react";
export default function RenderMultipleElementsList() {
  const persons = [
    {
      id: 1,
      name: "User 1",
      age: 21,
    },
    {
      id: 2,
      name: "User 2",
      age: 28,
    },
    {
      id: 3,
      name: "User 3",
      age: 23,
    },
    {
      id: 4,
      name: "User 4",
      age: 25,
    },
  ];

  const filteredPersons = persons.filter((person) => person.age > 22);

  return filteredPersons.map((person) => (
    <Fragment key={person.id}>
      <h6>{person.name}</h6>
      <span>{person.age}</span>
    </Fragment>
  ));
}

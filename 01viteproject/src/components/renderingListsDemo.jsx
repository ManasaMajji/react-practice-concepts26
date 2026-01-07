export default function ListUsers() {
  const persons = [
    {
      id: 1,
      name: "user 1",
    },
    {
      id: 2,
      name: "user 2",
    },
    {
      id: 3,
      name: "user 3",
    },
  ];
  const returnedList = persons.map((person) => (
    // <li>{person.name}</li>  will give warning that Each child in a list should have a unique "key" prop.
    <li key={person.id}>{person.name}</li>
  ));
  return <ul>{returnedList}</ul>;
}

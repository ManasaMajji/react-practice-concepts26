let greetUserCount = 0;

function GreetUser() {
  // eslint-disable-next-line react-hooks/globals
  greetUserCount = greetUserCount + 1;
  return <h4>Greet user number: {greetUserCount}</h4>;
}

export function ImpureFunctions() {
  return (
    <>
      <GreetUser />
      <GreetUser />
      <GreetUser />
    </>
  );
}

function GreetUserPurely({ userCount }) {
  return <h4>Greet user number: {userCount}</h4>;
}

export function PureFunction() {
  return (
    <>
      <GreetUserPurely userCount={1}></GreetUserPurely>
      <GreetUserPurely userCount={2}></GreetUserPurely>
      <GreetUserPurely userCount={3}></GreetUserPurely>
    </>
  );
}

export function PureFunctionWithLocalMutation() {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push(<GreetUserPurely key={i} userCount={i + 1}></GreetUserPurely>);
  }
  return users;
}

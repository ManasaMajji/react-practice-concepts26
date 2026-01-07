// A component can have single default export but any number of named exports
function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

export function ExportedNamedFunction() {
  return "named exports are imported differently: inside {} from default export";
}

export default function Operations() {
  return (
    <>
      <div>
        <label>Sum of 1, 2 : </label> {sum(1, 2)}
      </div>
      <div>
        <label>Multiple of 1, 2 : </label> {multiply(1, 2)}
      </div>
    </>
  );
}

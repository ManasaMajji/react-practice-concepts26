import Operations, { ExportedNamedFunction } from "./components/exportsDemo";
import ConditionalRenderingDemo from "./components/conditionalRenderingDemo";
import ListUsers from "./components/renderingListsDemo";
import RenderMultipleElementsList from "./components/rendermultipleElementsList";
import {
  ImpureFunctions,
  PureFunction,
  PureFunctionWithLocalMutation,
} from "./components/ImpureFunctionsDemo";

function App() {
  return (
    <>
      <h1>hello</h1>
      <div>
        <h2>Demo of named and default exports</h2>
        <Operations />
        <p>
          <ExportedNamedFunction />
        </p>
      </div>
      <div>
        <h2>Demo of passing the props and conditional rendering:</h2>
        <label>isLoggedIn true: </label>
        <ConditionalRenderingDemo isLoggedin={true}></ConditionalRenderingDemo>
        <label>isLoggedIn false: </label>
        <ConditionalRenderingDemo isLoggedin={false}></ConditionalRenderingDemo>
      </div>
      <div>
        <h2>Demo of rendering lists:</h2>
        <ListUsers />
        <label>Multiple elemts in list: </label> <RenderMultipleElementsList />
      </div>
      <div>
        <h2>Demo of pure and impure functions:</h2>
        <pre>
          Because of wrapping the app in strict mode all components execute
          twice in development mode and impure functions will give different
          result due to this and impure calculations are hence detected and
          avoided during development
        </pre>
        <label>Impure example: </label>
        <ImpureFunctions />
        <label>Pure example: </label>
        <PureFunction />
        <label>Pure function with local mutation example: </label>
        <PureFunctionWithLocalMutation />
      </div>
    </>
  );
}

export default App;

import CustomButton from "./companents/CustomButton"

function App() {

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Buttons</h1>
      <CustomButton text="Normal Button" />
      <CustomButton text="Warning Button" warnMessage="This is a warning!" />
      <CustomButton text="Hint Button" hint="This is a hint!" />
    </div>
  );
}

export default App

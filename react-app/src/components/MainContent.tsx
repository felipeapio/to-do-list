import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import InputText from "./InputText";

const MainContent = () => {
  const [display, setDisplay] = useState("d-display");
  let namesList: Array<String> = [];
  return (
    <div>
      <Alert
        classType="alert alert-primary alert-dismissible"
        displayType={display}
        text={"ola"}
        button={<Button onClick={() => setDisplay("d-none")}></Button>}
      ></Alert>
    </div>
  );
};

export default MainContent;

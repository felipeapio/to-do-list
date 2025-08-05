import { type ReactNode, useState, type ChangeEvent } from "react";
import Alert from "./Alert";
import Button from "./Button";
import InputText from "./InputText";

const MainContent = () => {
  const [namesList, setNamesList] = useState<string[]>([]);
  const [display, setDisplay] = useState("d-display");

  const handleInsertChange = () => {
    let novoNome = document.getElementById("toDoList") as HTMLInputElement;
    setNamesList((prevNamesList) => [...prevNamesList, String(novoNome.value)]);
  };

  return (
    <>
      {namesList.map((item, index) => (
        <Alert
          id={String(index)}
          classType="alert alert-primary alert-dismissible"
          displayType={display}
          text={item}
          button={<Button onClick={() => setDisplay("d-none")}></Button>}
        ></Alert>
      ))}
      <InputText onClick={handleInsertChange} text="Inserir"></InputText>
    </>
  );
};

export default MainContent;

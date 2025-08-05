import type { ReactNode } from "react";

interface Props {
  id?: string;
  text: string;
  classType?: string;
  displayType?: string;
  button?: ReactNode;
}

const Alert = ({
  id,
  button,
  classType = "alert alert-primary",
  displayType = "d-display",
  text,
}: Props) => {
  return (
    <>
      <div id={id} className={classType + " " + displayType} role="alert">
        {text} {button}
      </div>
    </>
  );
};

export default Alert;

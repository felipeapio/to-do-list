import type { ReactNode } from "react";

interface Props {
  text: string;
  classType?: string;
  displayType?: string;
  button?: ReactNode;
}

const Alert = ({
  button,
  classType = "alert alert-primary",
  displayType = "d-display",
  text,
}: Props) => {
  return (
    <>
      <div className={classType + " " + displayType} role="alert">
        {text} {button}
      </div>
    </>
  );
};

export default Alert;

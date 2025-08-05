interface Props {
  onClick?: () => void;
  text: string;
}
const InputText = ({ onClick, text }: Props) => {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Insira Qualquer Coisa"
          aria-label="Recipient’s username"
          aria-describedby="button-addon2"
          id="toDoList"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inserir"
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default InputText;

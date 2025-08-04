interface Props {
  onClose?: () => void;
}
const InputText = ({ onClose }: Props) => {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Insira Qualquer Coisa"
          aria-label="Recipient’s username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Inserir
        </button>
      </div>
    </>
  );
};

export default InputText;

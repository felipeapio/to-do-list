interface Props {
  onClick?: () => void;
}
const Button = ({ onClick }: Props) => {
  return (
    <>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </>
  );
};

export default Button;

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-2 p-2 m-2 bg-cyan-400 hover:bg-cyan-700 rounded-2"
    >
      Increase
    </button>
  );
}

export default Button;

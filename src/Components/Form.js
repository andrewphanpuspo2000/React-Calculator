export const Form = ({ value, onSubmitValue, handleChange }) => {
  return (
    <div>
      <form onSubmit={onSubmitValue}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

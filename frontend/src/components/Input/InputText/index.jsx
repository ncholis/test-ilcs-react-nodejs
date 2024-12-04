import PropTypes from 'prop-types'

//CSS
import './InputText.css'

const InputText = ({ value, label, name, onChange, onSubmit }) => {
  return (
    <>
      <label
        htmlFor="inputField"
        className="input-label"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value || ''}
        className="input-text"
        onChange={onChange}
        onKeyDown={onSubmit}
      ></input>
    </>
  );
};

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.any,
    onSubmit: PropTypes.func,
}

export default InputText;

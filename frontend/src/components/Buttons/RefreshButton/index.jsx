import PropTypes from 'prop-types'

const RefreshButton = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      style={{
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: isLoading ? "not-allowed" : "pointer",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        fill="white"
        style={{
          animation: isLoading ? "spin 1s linear infinite" : "none",
        }}
      >
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
      </svg>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
  );
};


RefreshButton.propTypes = {
    onClick: PropTypes.func,
    isLoading: PropTypes.bool
}

export default RefreshButton;

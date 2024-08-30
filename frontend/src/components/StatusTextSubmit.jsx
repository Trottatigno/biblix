import PropTypes from "prop-types";

function StatusTextSubmit({ message, status }) {
  function handleCurrentStatus(status) {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800 border-green-300";
      case "error":
        return "bg-red-100 text-red-800 border-red-300";

      default:
        return "";
    }
  }

  const className = handleCurrentStatus(status);

  return message ? <p className={className}>{message}</p> : null;
}

StatusTextSubmit.propTypes = {
  message: PropTypes.string,
  status: PropTypes.oneOf(["success", "error", ""]),
};

export default StatusTextSubmit;

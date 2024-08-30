import PropTypes from "prop-types";

function StatusTextSubmit({ message, status }) {
  function handleCurrentStatus(status) {
    switch (status) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";

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

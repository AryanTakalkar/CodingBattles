import PropTypes from "prop-types";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transform-gpu transition-transform duration-300 hover:scale-105 hover:skew-x-3 hover:skew-y-1 ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  containerClass: PropTypes.string,
};

Button.defaultProps = {
  id: "",
  rightIcon: null,
  leftIcon: null,
  containerClass: "",
};

export default Button;

import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <>
      <img
        src="/logo1.webp"
        alt="Logo"
        className="
          mx-auto 
          mb-8 
          w-28 md:w-36 lg:w-48  // Responsive width
          rounded-3xl
          "
        loading="lazy"
        width="192" 
        height="192" 
      />
      <h1 className="text-3xl font-semibold text-[#4A079C] mb-4 text-center">
        {title}
      </h1>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

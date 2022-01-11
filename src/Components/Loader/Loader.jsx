import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader type="Puff" color="white" height={100} width={100} timeout={3000} />
  );
};
export default Loader;

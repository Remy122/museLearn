import { loading } from "../assets";

const Generating = ({ className }) => {
  // Accept className as a prop
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4 text-n-4" src={loading} alt="loading" />
      Type your questions here
    </div>
  );
};

export default Generating;

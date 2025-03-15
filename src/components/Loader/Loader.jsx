import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <BeatLoader color={"red"} />
    </div>
  );
};

export default Loader;

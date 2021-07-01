import { createContext, useState } from "react";
import Loading from "./components/Loader";

export const LoaderContext = createContext(null);

const Loader = ({ children }) => {
  const [show, setShow] = useState(false);

  return(
<>
    <LoaderContext.Provider value={{setShow}}>{show ? <Loader /> : children}</LoaderContext.Provider>;
   </>
    )
};

export default Loader;

import { createContext } from "react";

export const LoaderContext = createContext(null);

// const Loader = ({ children }) => {
//   const [show, setShow] = useState(true);

//   return(
// <>
//     {/* <LoaderContext.Provider value={{show, setShow}}>{show ? <Loader /> : children}</LoaderContext.Provider>; */}
//    </>
//     )
// };

// export default Loader;

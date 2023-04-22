import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Tawk = () => {
  const tawkMessengerRef = useRef();

  const onLoad = () => {
    tawkMessengerRef.current.hideWidget();
  };

  return (
    <div>
      {/* <button onClick={handleMinimize}>Minimize chat</button> */}
      <TawkMessengerReact
        propertyId="644225414247f20fefeced59"
        widgetId="1guh632m8"
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
};

export default Tawk;

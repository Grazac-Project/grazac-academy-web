import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Tawk = () => {
  const tawkMessengerRef = useRef();

  const onLoad = () => {
    tawkMessengerRef.current.hideWidget();
  };

  return (
    <div>
      <TawkMessengerReact
        propertyId="643a957031ebfa0fe7f8775e"
        widgetId="1gu2dfgb5"
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
};

export default Tawk;

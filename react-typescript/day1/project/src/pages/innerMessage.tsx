import React from "react";

interface getMessageProps {
  message: string;
}
const InnerMessage = (props: getMessageProps) => {
  const onAlert = () => {
    window.alert(`this is props message:: ${props.message}`);
  };
  return (
    <div>
      <button onClick={() => onAlert()}>버튼</button>
    </div>
  );
};

export default InnerMessage;

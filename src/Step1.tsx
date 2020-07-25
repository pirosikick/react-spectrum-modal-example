import React from "react";

type Props = {
  title: string;
};

export const ModalDialog: React.FC<Props> = ({ title, children }) => (
  <div
    style={{
      position: "fixed",
      zIndex: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        background: "white",
        color: "black",
        padding: 30,
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </div>
  </div>
);

import React from "react";

const Loader: React.FC = () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="lds-dual-ring"></div>
    </div>
);

export default Loader;

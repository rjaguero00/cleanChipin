import React from "react";

export const FormBtn = props => (
    <button {...props} className="btn btn-success" style={{ float: "left", marginBottom: 10 }} >
        {props.children}
    </button>
);

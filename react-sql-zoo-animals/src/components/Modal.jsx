import React from "react";

const Modal = ({id}) => {
    return id === 0 ? null : (
    <div>
        <div>&times</div>
    </div>)
}
import React from "react";
import './Button.css';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ data, className, style, onClick }) => {
    return (
        <div className="Button">
            <BootstrapButton
                variant="outline-primary"
                className={`btn ${className}`}  // Added dynamic className for more control
                style={style}
                onClick={onClick}  // Added onClick prop
            >
                <strong>{data}</strong>
            </BootstrapButton>
        </div>
    );
};

export default Button;

import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#FBD062' }}>
            <h6 className="text-center py-5">©️ Developed by <a href="https://taibislamdipu.netlify.app/" target="_blank">Taib Islam</a> {new Date().getFullYear()}</h6>
        </footer>
    );
};

export default Footer;
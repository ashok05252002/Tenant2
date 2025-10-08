import React from 'react';
import { Link } from 'react-router-dom';

const MobileFooter = () => {
    return (
        <footer className="px-4 py-6 text-center text-xs text-secondary-500">
            <div className="flex justify-center gap-4 mb-2">
                <Link to="/about" className="hover:underline">About Us</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
                <Link to="/terms" className="hover:underline">Terms</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Al Dahab Investments Group</p>
        </footer>
    );
};

export default MobileFooter;

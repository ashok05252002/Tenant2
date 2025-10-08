import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, LayoutDashboard } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x && x !== 'admin');
    const nonClickableParents = ['masters', 'modules', 'settings', 'user-management', 'website', 'vendor', 'applications', 'brokers'];

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

    return (
        <nav className="flex items-center text-sm text-secondary-500 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                    <Link to="/admin" className="inline-flex items-center gap-2 hover:text-primary-600">
                        <LayoutDashboard size={16} />
                        Dashboard
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/admin/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const isNonClickable = nonClickableParents.includes(value) && !isLast;

                    return (
                        <li key={to}>
                            <div className="flex items-center">
                                <ChevronRight size={16} />
                                {isNonClickable ? (
                                    <span className="ml-1 md:ml-2 font-medium text-secondary-700 cursor-default">
                                        {capitalize(value)}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className={`ml-1 md:ml-2 hover:text-primary-600 ${isLast ? 'font-medium text-secondary-700' : ''}`}
                                    >
                                        {capitalize(value)}
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

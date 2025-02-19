import React from 'react'
import './BreadCrumbs.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';

const BreadCrumbs = ({ paths }) => {
    return (
        <>
            <nav aria-label="breadcrumb" className="breadcrumbs">
                <ul>
                    <Link href="/" className="breadcrumb-home-icons">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    {paths.map((path, index) => (
                        <li key={index} className="breadcrumb-item">
                            {index < paths.length - 1 ? (
                                <Link to={path.link} className="breadcrumb-link">
                                    {path.label}<FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            ) : (
                                <span className="breadcrumb-current">{path.label}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default BreadCrumbs

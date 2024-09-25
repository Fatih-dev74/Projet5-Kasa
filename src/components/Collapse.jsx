import React, {useState} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'is-open' : 'is-closed'}`}>
            <div className="collapse__header">
                <span className="collapse__title">{title}</span>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    onClick={toggleCollapse}
                    className={`collapse__chevron ${isOpen ? 'rotate' : ''}`}
                />
            </div>
            <div className={`collapse__content ${isOpen ? 'is-open' : 'is-closed'}`}>
                {children}
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;
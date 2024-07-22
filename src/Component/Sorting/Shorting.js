import React, { useState } from 'react';
import "./sorting.css";

const Shorting = ({ setSortingsidebar, applySorting }) => {
    const [selectedField, setSelectedField] = useState(null);

    const handleToggle = (field) => {
        if (selectedField === field) {
            setSelectedField(null);
        } else {
            setSelectedField(field);
        }
    };

    const handleApply = () => {
        if (selectedField) {
            applySorting(selectedField);
            setSortingsidebar({ show: false });
        } else {
            alert("Please select a field to sort by.");
        }
    };

    return (
        <div className='sort-sidebar'>
            <div className='sortsidebar-inside'>
                <div className='sort-upper'>
                    <h5>Sorting Options</h5>
                    <div onClick={() => setSortingsidebar({ show: false })}><i className="fa-solid fa-xmark"></i></div>
                </div>
                <div className='sort-lower'>
                    <div className='sort-content'>
                        <h5>ID</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'id'}
                                onChange={() => handleToggle('id')}
                            />
                        </div>
                    </div>
                    <div className='sort-content'>
                        <h5>Name</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'name'}
                                onChange={() => handleToggle('name')}
                            />
                        </div>
                    </div>
                    <div className='sort-content'>
                        <h5>Category</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'category'}
                                onChange={() => handleToggle('category')}
                            />
                        </div>
                    </div>
                    <div className='sort-content'>
                        <h5>Subcategory</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'subcategory'}
                                onChange={() => handleToggle('subcategory')}
                            />
                        </div>
                    </div>
                    <div className='sort-content'>
                        <h5>Created At</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'createdAt'}
                                onChange={() => handleToggle('createdAt')}
                            />
                        </div>
                    </div>
                    <div className='sort-content'>
                        <h5>Updated At</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'updatedAt'}
                                onChange={() => handleToggle('updatedAt')}
                            />
                        </div>
                    </div>
                    <div className='sort-content'>
                        <h5>Price</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'price'}
                                onChange={() => handleToggle('price')}
                            />
                        </div>
                    </div>
                    <div className='sort-content'>
                        <h5>Sale Price</h5>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                checked={selectedField === 'salePrice'}
                                onChange={() => handleToggle('salePrice')}
                            />
                        </div>
                    </div>
                    <button className='btnn' onClick={handleApply}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Shorting;

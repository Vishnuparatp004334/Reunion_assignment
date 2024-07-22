import React, { useState } from 'react';
import "./viewsidebar.css";

const ViewSidebar = ({ setSidebar, columnVisibility, applyColumnVisibility }) => {
    const [localVisibility, setLocalVisibility] = useState({ ...columnVisibility });

    const handleToggle = (column) => {
        setLocalVisibility(prevState => ({
            ...prevState,
            [column]: !prevState[column]
        }));
    };

    return (
        <div className='sidebar'>
            <div className='sidebar-inside'>
                <div className='upper'>
                    <h5>Show/Hide Columns</h5>
                    <div onClick={() => setSidebar({ show: false })}><i className="fa-solid fa-xmark"></i></div>
                </div>
                <div className='lower'>
                    <div className='content'>
                        <h5>ID</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckID" checked={localVisibility.id} onChange={() => handleToggle('id')} />
                        </div>
                    </div>
                    <div className='content'>
                        <h5>Name</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckName" checked={localVisibility.name} onChange={() => handleToggle('name')} />
                        </div>
                    </div>
                    <div className='content'>
                        <h5>Category</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCategory" checked={localVisibility.category} onChange={() => handleToggle('category')} />
                        </div>
                    </div>
                    <div className='content'>
                        <h5>Subcategory</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckSubcategory" checked={localVisibility.subcategory} onChange={() => handleToggle('subcategory')} />
                        </div>
                    </div>
                    <div className='content'>
                        <h5>Created At</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCreatedAt" checked={localVisibility.createdAt} onChange={() => handleToggle('createdAt')} />
                        </div>
                    </div>
                    <div className='content'>
                        <h5>Updated At</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckUpdatedAt" checked={localVisibility.updatedAt} onChange={() => handleToggle('updatedAt')} />
                        </div>
                    </div>
                    <div className='content'>
                        <h5>Price</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckPrice" checked={localVisibility.price} onChange={() => handleToggle('price')} />
                        </div>
                    </div>
                    <div className='content'>
                        <h5>Sale Price</h5>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckSalePrice" checked={localVisibility.salePrice} onChange={() => handleToggle('salePrice')} />
                        </div>
                    </div>
                    <button className='btnn' onClick={() => applyColumnVisibility(localVisibility)}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default ViewSidebar;

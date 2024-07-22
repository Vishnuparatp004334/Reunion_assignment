import React, { useState } from 'react';
import "./filter.css";

const Filter = ({ setFiltersidebar, handleSearch, handleCategoryFilter, handleSubCategoryFilter, handlePriceFilter, handleSalePriceFilter, handleCreatedDateFilter,
    handleUpdatedDateFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Select');
    const [selectedSubCategory, setSelectedSubCategory] = useState('Select');
    const [price, setPrice] = useState(70);
    const [saleprice, setSalePrice] = useState(70);
    const [createdStartDate, setCreatedStartDate] = useState('');
    const [createdEndDate, setCreatedEndDate] = useState('');
    const [updatedStartDate, setUpdatedStartDate] = useState('');
    const [updatedEndDate, setUpdatedEndDate] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        handleCategoryFilter(e.target.value);
    };

    const handleSubCategoryChange = (e) => {
        setSelectedSubCategory(e.target.value);
        handleSubCategoryFilter(e.target.value);
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
        handlePriceFilter(e.target.value);
    };
    const handleSalePriceChange = (e) => {
        setSalePrice(e.target.value);
        handleSalePriceFilter(e.target.value);
    };
    const handleCreatedStartDateChange = (e) => {
        setCreatedStartDate(e.target.value);
        handleCreatedDateFilter(e.target.value, createdEndDate);
    };

    const handleCreatedEndDateChange = (e) => {
        setCreatedEndDate(e.target.value);
        handleCreatedDateFilter(createdStartDate, e.target.value);
    };

    const handleUpdatedStartDateChange = (e) => {
        setUpdatedStartDate(e.target.value);
        handleUpdatedDateFilter(e.target.value, updatedEndDate);
    };

    const handleUpdatedEndDateChange = (e) => {
        setUpdatedEndDate(e.target.value);
        handleUpdatedDateFilter(updatedStartDate, e.target.value);
    };
    return (
        <div className='filter-sidebar'>
            <div className='filter-inside'>
                <div className='filter-upper'>
                    <h5>Filters</h5>
                    <div onClick={() => setFiltersidebar({ show: false })}><i className="fa-solid fa-xmark"></i></div>
                </div>
                <div className='filter-lower'>
                    <div className='filter-content'>
                        <h6>Name</h6>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='filter-content'>
                        <h6>Category</h6>
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="Select">Select Value</option>
                            <option value="Health">Health</option>
                            <option value="Activity">Activity</option>
                            <option value="Home">Home</option>
                            <option value="Pets">Pets</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                    <div className='filter-content'>
                        <h6>Subcategory</h6>
                        <select value={selectedSubCategory} onChange={handleSubCategoryChange}>
                            <option value="Select">Select Value</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Mens">Mens</option>
                            <option value="Outdoors">Outdoors</option>
                            <option value="Camping">Camping</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Aquarium">Aquarium</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Tire">Tire</option>
                            <option value="Jewelry">Jewelry</option>
                            <option value="Movie">Movie</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Baby">Baby</option>
                            <option value="First Aid">First Aid</option>
                            <option value="Home Improvement">Home Improvement</option>
                            <option value="Bath">Bath</option>
                            <option value="Sports">Sports</option>
                            <option value="Party">Party</option>
                            <option value="Computer">Computer</option>
                            <option value="Technology">Technology</option>
                            <option value="Book">Book</option>
                            <option value="Camera">Camera</option>
                            <option value="Skincare">Skincare</option>
                            <option value="Swiming">Swiming</option>
                            <option value="Toy">Toy</option>
                            <option value="Engine">Engine</option>
                            <option value="Music">Music</option>
                            <option value="Dining">Dining</option>
                            <option value="Car">Car</option>
                            <option value="Vitamin">Vitamin</option>
                            <option value="Game">Game</option>
                            <option value="Phone">Phone</option>
                        </select>
                    </div>
                    <div className='filter-content'>
                        <h6>Created At</h6>
                        <input
                            type='date'
                            value={createdStartDate}
                            onChange={handleCreatedStartDateChange}
                        />
                        <p className='to'>To</p>
                        <input
                            type='date'
                            value={createdEndDate}
                            onChange={handleCreatedEndDateChange}
                        />
                    </div>
                    <div className='filter-content'>
                        <h6>Updated At</h6>
                        <input
                            type='date'
                            value={updatedStartDate}
                            onChange={handleUpdatedStartDateChange}
                        />
                        <p className='to'>To</p>
                        <input
                            type='date'
                            value={updatedEndDate}
                            onChange={handleUpdatedEndDateChange}
                        />
                    </div>
                    <div className='filter-content'>
                        <h6>Price</h6>
                        <div className="range-container">
                            <div className='spd'>0</div>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="150"
                                value={price}
                                onChange={handlePriceChange}
                            />
                            <div className='sp'>150</div>
                        </div>
                        <div>Selected Price: {price}</div>
                    </div>
                    <div className='filter-content'>
                        <h6>Sale Price</h6>
                        <div className="range-container">
                            <div className='spd'>0</div>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="150"
                                value={saleprice}
                                onChange={handleSalePriceChange}
                            />
                            <div className='sp'>150</div>
                        </div>
                        <div>Selected Price: {saleprice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;

import React from 'react';
import "./category.css";

const Category = ({ setCategory, filterByCategory }) => {
    const categories = [
        "All", "Health", "Clothing", "Activity", "Home", "Pets", "Automotive",
        "Entertainment", "Beauty", "Electronics"
    ];

    return (
        <div className='cate' onClick={() => setCategory({ show: false })}>
            <div className='cate-inside' onClick={(e) => e.stopPropagation()}>
                {categories.map(category => (
                    <div key={category} onClick={() => filterByCategory(category)}>
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;

import React from 'react'
import "./subcategory.css"

const Subcategory = ({setSubcategory, filterBySubcategory}) => {
    const Subcategory =[
        "Nutrition", "Mens", "Outdoors", "Camping", "Cleaning", "Aquarium",
        "Cat", "Dog", "Tire", "Jewelry", "Movie", "Furniture", "Baby", "First Aid", "Home Improvement",
        "Bath", "Sports", "Party", "Computer", "Technology", "Book", "Camera",
        "Skincare", "Swiming", "Toy", "Engine", "Music", "Dining", "Vitamin", "Car", "Kitchen",
        "Game", "Phone"
    ]
  return (
    <div className='subcat' onClick={() => setSubcategory({show:false})}>
        <div className='subcate-inside' onClick={(e) => e.stopPropagation()}>
            {Subcategory.map(sub => (
                <div key={sub}  onClick={() => filterBySubcategory(sub)}>
                {sub}
            </div>
            ))}
        </div>
    </div>
  )
}

export default Subcategory

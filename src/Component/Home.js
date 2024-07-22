import React, { useState, useEffect } from 'react';
import data from "../data.json";
import Pagination from './Pagination';
import "./home.css";
import Category from './Category/Category';
import Subcategory from './Subcategory/Subcategory';
import ViewSiderbar from './ViewSidebar/ViewSiderbar';
import Shorting from './Sorting/Shorting';
import Filter from './Filter/Filter';

const Home = () => {
    const [dataList, setDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [category, setCategory] = useState({ show: false })
    const [subcategory, setSubcategory] = useState({ show: false })
    const [viewsiderbar, setSidebar] = useState({ show: false })
    const [sortingsidebar, setSortingsidebar] = useState({show:false})
    const [filtersidebar, setFiltersidebar] = useState({show:false})
    const [filteredData, setFilteredData] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({
        id: true,
        name: true,
        category: true,
        subcategory: true,
        createdAt: true,
        updatedAt: true,
        price: true,
        salePrice: true,
    });
    useEffect(() => {
        // Load data from JSON file
        setDataList(data);
        setFilteredData(data);
    }, []);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Filter data based on category
    const filterByCategory = (category) => {
        if (category === "All") {
            setFilteredData(dataList);
        } else {
            const filtered = dataList.filter(item => item.category === category);
            setFilteredData(filtered);
        }
        setCurrentPage(1);
        setCategory({ show: false });
    };

    // Filter data based on subcategory
    const filterBySubcategory = (subcategory) => {
        if (subcategory === "All") {
            setFilteredData(dataList);
        } else {
            const filtered = dataList.filter(item => item.subcategory === subcategory);
            setFilteredData(filtered);
        }
        setCurrentPage(1);
        setSubcategory({ show: false });
    };

    const applyColumnVisibility = (newVisibility) => {
        setColumnVisibility(newVisibility);
        setSidebar({ show: false });
    };
    const applySorting = (field) => {
        const sortedData = [...filteredData].sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
        setFilteredData(sortedData);
        setCurrentPage(1);
    };

    const handleSearch = (searchTerm) => {
        const filtered = dataList.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(filtered);
        setCurrentPage(1);
    };

    const handleCategoryFilter = (selectedCategory) => {
        if (selectedCategory === "Select") {
            setFilteredData(dataList);
        } else {
            const filtered = dataList.filter(item => item.category === selectedCategory);
            setFilteredData(filtered);
        }
        setCurrentPage(1);
    };
    const handleSubCategoryFilter = (selectedSubCategory) => {
        if (selectedSubCategory === "Select") {
            setFilteredData(dataList);
        } else {
            const filtered = dataList.filter(item => item.subcategory ===selectedSubCategory);
            setFilteredData(filtered);
        }
        setCurrentPage(1);
    };
    const handlePriceFilter = (selectedPrice) => {
        const filtered = dataList.filter(item => item.price <= selectedPrice);
        setFilteredData(filtered);
        setCurrentPage(1);
    };
    const handleSalePriceFilter = (selectedPrice) => {
        const filtered = dataList.filter(item => item.sale_price <= selectedPrice);
        setFilteredData(filtered);
        setCurrentPage(1);
    };
    const handleCreatedDateFilter = (startDate, endDate) => {
        const filtered = dataList.filter((item) => {
          const itemDate = new Date(item.createdAt);
          const start = new Date(startDate);
          const end = new Date(endDate);
          return itemDate >= start && itemDate <= end;
        });
        setFilteredData(filtered);
        setCurrentPage(1);
      };
    
      const handleUpdatedDateFilter = (startDate, endDate) => {
        const filtered = dataList.filter((item) => {
          const itemDate = new Date(item.updatedAt);
          const start = new Date(startDate);
          const end = new Date(endDate);
          return itemDate >= start && itemDate <= end;
        });
        setFilteredData(filtered);
        setCurrentPage(1);
      };
    return (
        <div className='home-container'>
            <h1 className='active'>All Data</h1>
            <div className='upperside'>
                <div><input type='text' placeholder='Search' /></div>
                <div onClick={() => setSidebar({ show: true })}><i className="fa-solid fa-eye"></i></div>
                <div onClick={() => setSortingsidebar({show:true})}><i class="fa-solid fa-arrow-up-long"></i><i class="fa-solid fa-arrow-down-long"></i></div>
                <div onClick={() => setFiltersidebar({show:true})}><i class="fa-solid fa-filter"></i></div>
                <div><i class="fa-solid fa-layer-group"></i></div>
            </div>
            <div className='lower-contain'>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            {columnVisibility.id && <th scope="col">ID</th>}
                            {columnVisibility.name && <th scope="col">Name</th>}
                            {columnVisibility.category && <th className='ab' scope="col" onClick={() => setCategory({ show: true })}>Category <i className="fa-solid fa-caret-down"></i></th>}
                            {columnVisibility.subcategory && <th className='ab' scope="col" onClick={() => setSubcategory({ show: true })}>Subcategory <i className="fa-solid fa-caret-down"></i></th>}
                            {columnVisibility.createdAt && <th scope="col">Created At</th>}
                            {columnVisibility.updatedAt && <th scope="col">Updated At</th>}
                            {columnVisibility.price && <th scope="col">Price</th>}
                            {columnVisibility.salePrice && <th scope="col">Sale Price</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(item => (
                            <tr key={item.id}>
                                {columnVisibility.id && <th scope="row">{item.id}</th>}
                                {columnVisibility.name && <td>{item.name}</td>}
                                {columnVisibility.category && <td>{item.category}</td>}
                                {columnVisibility.subcategory && <td>{item.subcategory}</td>}
                                {columnVisibility.createdAt && <td>{new Date(item.createdAt).toLocaleString()}</td>}
                                {columnVisibility.updatedAt && <td>{new Date(item.updatedAt).toLocaleString()}</td>}
                                {columnVisibility.price && <td>{item.price}</td>}
                                {columnVisibility.salePrice && <td>{item.sale_price}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
            {category.show && <Category setCategory={setCategory} filterByCategory={filterByCategory} />}
            {subcategory.show && <Subcategory setSubcategory={setSubcategory} filterBySubcategory={filterBySubcategory} />}
            {viewsiderbar.show && <ViewSiderbar setSidebar={setSidebar} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility}  applyColumnVisibility={applyColumnVisibility} />}
            {sortingsidebar.show && <Shorting setSortingsidebar={setSortingsidebar}  applySorting={applySorting}/>}
            {filtersidebar.show && <Filter setFiltersidebar={setFiltersidebar}  handleSearch={handleSearch}  handleCategoryFilter={ handleCategoryFilter} handleSubCategoryFilter={handleSubCategoryFilter} handlePriceFilter={handlePriceFilter}  handleSalePriceFilter={ handleSalePriceFilter}  handleCreatedDateFilter={handleCreatedDateFilter} handleUpdatedDateFilter={handleUpdatedDateFilter}/>}
        </div>
    );
};

export default Home;

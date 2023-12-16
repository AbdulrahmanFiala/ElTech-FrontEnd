import { useState, useEffect } from "react";

import { getAllCategories } from "../../../api/services/user/product-services";

const PostsCategories = ({
	onCategoryChange,
	onSearch
}) => {
  const [categories, setCategories] = useState([]);
  const [activeItem, setActiveItem] = useState('ALL'); // Define activeItem state
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term



  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId) => {
	setActiveItem(categoryId);
    onCategoryChange(categoryId); 
  };

  const handleSearch = () => {
    onSearch(searchTerm);
	setSearchTerm("")
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <div className="product-cate">
		<h5>Categories</h5>
          <ul>
            <li>
              <a
                className={activeItem === "ALL" ? "active" : ""}
                onClick={() => handleCategoryChange("ALL")}
                href="#"
              >
                All
              </a>
            </li>
            {categories &&
              categories.map((category) => (
                <li key={category.id}>
                  <a
                    className={
                      activeItem === category.id ? "active" : ""
                    }
                    onClick={() => handleCategoryChange(category.id)}
                    href="#"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="col-md-5">
	  <div className="search-posts">
          <input
            type="text"
            placeholder="Search Posts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
			</div>
    </div>
  );
};

export default PostsCategories;

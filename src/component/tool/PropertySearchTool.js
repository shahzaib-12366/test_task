// PropertySearchTool.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSelectedProperties,
  updateSearchTerm,
  filterByPropertyType,
} from './propertyActions';
import './PropertySearchTool.css'; 

const PropertySearchTool = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.propertyReducer.properties);
  const selectedProperties = useSelector(
    (state) => state.propertyReducer.selectedProperties
  );
  const searchTerm = useSelector((state) => state.propertyReducer.searchTerm);
  const filteredPropertyType = useSelector(
    (state) => state.propertyReducer.filteredPropertyType
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(updateSearchTerm(value));
  };

  const handleCheckboxChange = (id) => {
    const updatedProperties = properties.map((property) => {
      if (property.id === id) {
        return { ...property, selected: !property.selected };
      }
      return property;
    });

    dispatch(updateSelectedProperties(updatedProperties.filter((property) => property.selected)));
  };

  const handlePropertyTypeClick = (propertyType) => {
    dispatch(filterByPropertyType(propertyType));
  };

  const filteredProperties = properties.filter((property) => {
    const addressMatch = property.address.includes(searchTerm);
    const propertyTypeMatch =
      !filteredPropertyType || property.propertyType === filteredPropertyType;
    return addressMatch && propertyTypeMatch;
  });

  const handleSearch = () => {
   
    const filteredProperties = properties.filter((property) => {
      const addressMatch = property.address.includes(searchTerm);
      const propertyTypeMatch =
        !filteredPropertyType || property.propertyType === filteredPropertyType;
      return addressMatch && propertyTypeMatch;
    });
  
    dispatch(updateSelectedProperties(filteredProperties));
  };
  return (
    <>
    <h1>Property Search Tool</h1>
    <div className="property-search-tool">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by Address"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="results">
        <h3>Search Results:</h3>
        <ul>
          {filteredProperties.map((property) => (
            <li key={property.id}>
              <input
                type="checkbox"
                checked={property.selected}
                onChange={() => handleCheckboxChange(property.id)}
              />
              {property.address} - {property.propertyType}
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-properties">
        <h3>Selected Properties:</h3>
        <ul>
          {selectedProperties &&
            selectedProperties.map((property) => (
              <li key={property.id}>
                {property.address} - {property.propertyType}
              </li>
            ))}
        </ul>
      </div>
      <div className="property-types">
        <h3>Filter by Property Type:</h3>
        <ul>
          <li onClick={() => handlePropertyTypeClick(null)}>All</li>
          <li onClick={() => handlePropertyTypeClick('House')}>House</li>
          <li onClick={() => handlePropertyTypeClick('Flat')}>Flat</li>
          <li onClick={() => handlePropertyTypeClick('Akram')}>Akram</li>
          <li onClick={() => handlePropertyTypeClick('Terraced House')}>Terraced House</li>
         
        </ul>
      </div>
    </div>
</>

  );
};
export default PropertySearchTool;

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { capitalizeFirstLetter, dataCategories } from "../../data/appDataUtils";
import "./Category.scss";
const categories = dataCategories();

interface ICategory {
  filterValues: string[];
  setFilterValues: (filterValues: string[]) => void;
}
const Category: React.FC<ICategory> = ({ filterValues, setFilterValues }) => {
  const mappedCheckbox = categories.map((cat, index) => (
    <div className="category-pair">
      <div>
        <input
          key={"checkbox-" + cat + index}
          type="checkbox"
          name={cat}
          onChange={(e) => {
            if (e.target.checked && !filterValues.includes(cat)) {
              setFilterValues([...filterValues, cat]);
            } else {
              const index = filterValues.indexOf(cat);
              const newArray = filterValues;
              newArray.splice(index, 1);
              setFilterValues([...newArray]);
            }
          }}
        />
      </div>
      <div className="category-name">{capitalizeFirstLetter(cat)}</div>
    </div>
  ));
  return (
    <div className="Category-Container">
      <h3 className="category-title">Category Filters</h3>
      <div className="plain-line"/>
      {mappedCheckbox}
    </div>
  );
};

export default Category;

import React, { useEffect, useState } from "react";
import { myData, ItemInterface, dataCategories } from "../../data/appDataUtils";
import { NoData, NoDataType } from "../NoData/NoData";
import CatalogCard from "./CatalogCards/CatalogCard";
import "./CatalogContainer.scss";

interface ICatalogContainer {
  searchPhrase: string;
  filterValues: string[];
  isAsc: boolean;
}
const CatalogContainer: React.FC<ICatalogContainer> = ({
  searchPhrase,
  filterValues,
  isAsc,
}) => {
  const [data, setData] = useState<ItemInterface[]>([]);

  useEffect(() => {
    setData(myData);
  }, []); // Search Phrase / Category

  const sortedData = data
    .filter((item: ItemInterface) => {
      const capitalizedWord = item.productName.toUpperCase();
      const capitalizedSearchPhrase = searchPhrase.toUpperCase();
      return (
        capitalizedWord.includes(capitalizedSearchPhrase) &&
        (filterValues.length ? filterValues.includes(item.category) : true)
      );
    })
    .sort((a: ItemInterface, b: ItemInterface) =>
      isAsc ? a.unitPrice - b.unitPrice : b.unitPrice - a.unitPrice
    );

    
  const catalogCards = sortedData.map((item: ItemInterface, index: number) => {
    return <CatalogCard item={item} key={"catalogs-" + index} />;
  });

  return (
    <div className="Catalog-Container">
      {sortedData.length ? (
        <div className="Catalog-Container-box">{catalogCards}</div>
      ) : (
        <NoData content="No results found..." type={NoDataType.TABLE} />
      )}
    </div>
  );
};

export default CatalogContainer;

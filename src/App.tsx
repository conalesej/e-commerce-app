import { createContext, useState } from "react";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import CatalogContainer from "./components/Catalog/CatalogContainer";
import Category from "./components/Category/Category";
import { Modal } from "./components/Modal/Modal";
import InputBar from "./components/Search/InputBar";
import Sort from "./components/Sort/Sort";
import TitleBar from "./components/Title/TitleBar";

const initialContext = {
  isShowing: false,
  setIsShowing: (isShowing: boolean) => {},
};
export const ModalContext = createContext(initialContext);

const App: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filterValues, setFitlerValues] = useState<string[]>([]);
  const [isAsc, setIsAsc] = useState(false);

  
  return (
    <ModalContext.Provider
      value={{ isShowing: false, setIsShowing: setIsShowing }}
    >
      <div className="App">
        <div className="App-Panel-1 Pannel">
          <TitleBar />
        </div>
        <div className="App-Panel-2 Pannel">
          <Category
            filterValues={filterValues}
            setFilterValues={setFitlerValues}
          />
        </div>
        <div className="App-Panel-3 Pannel">
          <div className="App-Panel-3-flexbox">
            <div className="App-Panel-3-flexbox-item">
              <InputBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
              />
            </div>
            <div className="App-Panel-3-flexbox-item plain-line" />
            <div className="App-Panel-3-flexbox-item">
              <Sort isAsc={isAsc} setIsAsc={setIsAsc} />
            </div>
          </div>
        </div>
        <div className="App-Panel-4 Pannel">
          <CatalogContainer
            searchPhrase={searchPhrase}
            filterValues={filterValues}
            isAsc={isAsc}
          />
        </div>
        <div className="App-Panel-5 Pannel">
          <Cart />
        </div>
        {isShowing && (
          <Modal isShowing={isShowing} setIsShowing={setIsShowing} />
        )}
      </div>
    </ModalContext.Provider>
  );
};

export default App;

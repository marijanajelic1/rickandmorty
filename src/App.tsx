import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "./Sections/Card";
import Pages from "./Sections/Pages";
import Search from "./Sections/Search";
import Status from "./Sections/Status";
import React, { useState, useEffect } from "react";

/*
interface FetchedData {
  info: any; 
  results: any[];  
}
*/

function App() {

  const [fetchedData, updateFetchedData] = useState<any>({ info: null, results: [] });
  const [pageNumber, updatePageNumber] = React.useState<number>(1);
 
  let [search, updateSearch]=React.useState<string>('');
  let [status, updateStatus]=React.useState<string>('');

  let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`;

  // Uzimamo podatke sa api-a i radimo update sa novim podacima 
  // Ovo se desava svaki put kada se url promeni
  useEffect(()=>{
    (async function() {
      let data=await fetch(api).then((res)=>res.json());
      updateFetchedData(data);
    })();
  },[api]);

  // Ovo je kostur za izgled stranice gde sam uz pomoc Bootstrapa-a prilagodila izgled kao u zadatku
  // Takodje se ovde poziva i logika za resavanje zadatka (za Search bar, za prikazivanje Kartica...)
  return ( 
    <div className="App">
      <div className="container">
        <div className="row my-4">
          <div className="col-3">
            <img src="/rickandmorty.jpg" alt="RickAndMorty" width="56"/>
          </div>
          <div className="col-9">
            <Search  updatePageNumber={updatePageNumber} updateSearch={updateSearch}></Search>
          </div>
        </div>
        <div className="row bg-secondary">
          <Status updateStatus={updateStatus} updatePageNumber={updatePageNumber}></Status>
        </div>
        <div className="row bg-secondary">
          <div className="col-11">
            <div className="row">
              <Card results={fetchedData.results}></Card>
            </div>
          </div>
        </div>
      </div>
      <Pages pageNumber={pageNumber} updatePageNumber={updatePageNumber}></Pages>
    </div>
  );
};

export default App;

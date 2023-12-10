
import React from "react";

/* Kada dodje do promene u Search baru (input) event hendler se trigeruje i mi update-ujemo search vrednost i radi
se pretraga, takodje upate-ujemo i broj stranice kako bismo se nasli na prvoj stranici ucitanih podataka */
const Search = ({updatePageNumber, updateSearch}:{updatePageNumber: React.Dispatch<React.SetStateAction<number>>,updateSearch:React.Dispatch<React.SetStateAction<string>>}) =>{
  return (
    <form className='d-flex justify-content-end mt-3'>
      <input 
      onChange={event=>{
        updatePageNumber(1);
        updateSearch(event.target.value);
      }}
      placeholder="Search" type="text" className=''
      style={{ width:"20%", height:"35px", textAlign:"start", border:"2px solid grey", borderRadius:"8px"}}/>
    </form>
    );
};

export default Search;
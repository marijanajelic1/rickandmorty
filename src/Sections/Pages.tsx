import React from 'react'

/* Ovde je logika za prelazak sa jedne na drugu stranicu, kako nisam uspela da napravim da se svi podaci
prikazuju kada korisnik skroluje nadole, povezala sam tako da klikom na dugme korisnik prelazi na sledecu
ili prethodnu stranicu */
const Pages = ({ pageNumber, updatePageNumber }: {pageNumber: number, updatePageNumber: React.Dispatch<React.SetStateAction<number>> }) => {
    let next = () => {
      updatePageNumber((page: number) => page + 1);
    };
    
    // Ukoliko smo na prvoj stranici ne mozemo vise da idemo unazad
    let prev = () => {
        if(pageNumber===1) return;
        updatePageNumber((page: number) => page- 1);
    };
  
    return (
      <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={prev} className="button-primary">Prev</button>
        <button onClick={next} className="button-primary">Next</button>
      </div>
    );
  };
  
  export default Pages;
  
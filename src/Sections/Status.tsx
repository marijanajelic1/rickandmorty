import React from 'react'

const Status = ({ updateStatus, updatePageNumber }: { updateStatus: React.Dispatch<React.SetStateAction<string>>, updatePageNumber: React.Dispatch<React.SetStateAction<number>> }) => {

  /* Ukoliko smo radili pretragu po statusu karaktera kada kliknemo na radio dugme koje poziva ovu f-ju
   resetujemo se na pocetne vrednosti (pre bilo kakve pretrage) */
  let clear = () => {
    updateStatus("");
    updatePageNumber(1);
    window.location.reload();
  }

  let status = ["Alive", "Dead", "Unknown"];

  // U zavisnosti od toga koj smo status izabrali radimo update za taj status i po tom statusu se vrsi pretraga
  const handleFilterClick = (items: string) => {
    updatePageNumber(1);
    updateStatus(items);
  };

  // Prikaz radio dugmica i povezivanje sa gore navedenim funkcijama
  return (
    <div className='d-flex flex-wrap gap-3 mb-4'>
      <label>Character status: </label>
      <div>
        <input onClick={clear} className="form-check-input" type="radio" name="any" />
        <label className="form-check-label" >
          Any
        </label>
      </div>
      {status.map((items, index) => (
        <div key={index}>
          <div className="form-check">
            <input
              onClick={() => handleFilterClick(items)}
              className="form-check-input"
              type="radio"
              name="status"
              id={`status-${index}`}
            />
            <label className="form-check-label" htmlFor={`status-${index}`}>
              {items}
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Status;

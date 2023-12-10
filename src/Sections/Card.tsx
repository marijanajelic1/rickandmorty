import React from 'react'

/* Logika za prikazivanje kartica karaktera, uzimamo podatke koji su nam potrebni za prikaz (id - da bi znali
o kom karakteru se radi, ime karaktera i njegovu sliku) */ 
const Card = ({ results }: { results: any[] }) => {

   let data;
   if(results){
    data=results.map((x)=>{
        let { id,name,image} =x;
       return (
       <div key={id} className='col-3 position-relative mb-5' >
        <div className="bg-light" style={{borderRadius: '10px'}}>
            <img src={image} alt="" className="img-fluid" style={{ borderRadius: '10px 10px 0 0' }}/>
            <div className="content" style={{padding:'10px'}}>
            <div className="fs-4 fw-bold mb-4">{name}</div>
            </div>
        </div>
        </div>
       );
    });
   }else{
    data="";
   }
  return <>{data}</>;
};

export default Card;
'use client'
import { useParams } from 'next/navigation'
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import Foter from '@/app/components/foter';


export default function  fetcBrend(){
  const [brend, setBrend] = useState(null);
  const params = useParams()
  const [basket, setBasket] = useState(null);
  const [image, setImage] = useState(null);
  const router = useRouter();  
    useEffect(() => {
        async function fetchBasket() {
            const token = localStorage.getItem('token');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_basket`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
          if (res.status == 200) {
            const json = await res.json();
            

         
            setBasket(json);
       
        }
      }
      fetchBasket();
      }, []);
      
  async function setBasket_key(e) {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/set_basket/${e.target.value}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_basket`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
      if (res.status == 200) {
        const json = await res.json();
        
      
      setBasket(json);
   
    }

         
  
  }
  function setImg(e) {
    router.push(`../Name_without_use/${e.target.value}`);
    document.querySelector(".carusel");
    document.body.classList.toggle('carusel_new');
   
   

    console.log(e.target.value)
  
    setImage(e.target.value)
   }
 function exitImg() {
  setImage(null)
 }



   
    
 
  
  useEffect(() => {
    async function fetchUser() {
    
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL+`/` +decodeURIComponent(params.name)}`)
      if (res.status == 200) {
        const json = await res.json();

        setBrend(json);
   
    }
  }
    fetchUser();
  }, []);
  let sum = 0;
  if (basket){
  
  let new_basket = basket.map(res =>+Number(res.quantity))
  new_basket.map((item) => sum += item)}
  let contener_detal = ''
  if (image == null){
     contener_detal = '' ;}
  else { 
      contener_detal = 'none'; 
  }
  return (
  
    
    <div className={`contener_detal `}>
    {basket &&(<div className='baket_naw'>
     <div className="exit"><Link  href="/">
       <img src="../img/exit.png" alt=""width="24" height="24"/>
       </Link>  
      </div>
      <div className='baket'>
           <p>Корзина</p>
           <div className='contener_flex' >
           <Link   href="../basket"><img className='baket_img' src="../img/basket.png" alt=""width="24" height="24"/></Link>
           <p>{sum}</p>
           </div>
           
      </div>
     </div>)}
     {!basket &&(<div className="exit"><Link  href="/">
   <img src="../img/exit.png" alt=""width="24" height="24"/>
   </Link>  
  </div>)}
     <div className="padding_2vh "> 
   {brend && (brend.map(al =>(<div key={al.ID} className='detail'>
            <h1 key={al.ID + 'Manufacturer'} >{al.Наименование}</h1>
            <h4 key={al.ID + 'num' }>OEM-{ al.Номер}</h4>
             <p key={al.ID + 'Product_name' }>{ al.Примечание}</p>
             
              <h3 key={al.ID + 'Price'}>{ al.Цена} Руб</h3>
             <div className='' key={al.ID + 'foto' }>
             {/* <Link  key={foto + 'link'} href={foto} width="400" height="400"><img src={foto} ></img></Link> */}
            
             
             <style jsx>{`.image-button {
  width: 150px;
  height: 150px;
  border: none;
  margin-left: 30px;
  background-image: url(${al.Фотография[0]});
  background-size: cover;
} `}</style>
             <button
                       type="button"
                       value={al.ID}
                       className="image-button"
                       onClick={setImg}
                     
                       
                       > </button >
             
               </div> 
             
           
                   
                   <div className=' widh_35'   key={al}>
                   <img src="../img/whats.png" alt=""width="24" height="24"/><p>+7 927-024-57-79</p>
                     <button
                       type="button"
                       value={al.ID}
                       className="lf--submit"
                       onClick={setBasket_key}
                       > В корзину</button >
                       
                   </div> 

              </div> 
     
   ) ))} </div>
   <Foter url='../map.png'/>
   </div>

  
 )}
          
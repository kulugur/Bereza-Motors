'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Tree } from 'antd';
import Carousel_img from '@/app/components/Carousel_img';
import { useState } from 'react';
import Link from 'next/link';

async function fetcBrends(){
    const brend = await fetch('http://127.0.0.1:8000/tree_list', {
      method: "POST",
     
    });
    const res = await brend.json()
 
    return res
    
}

const { DirectoryTree } = await Tree;
const treeData = await fetcBrends();    


const Tree_detal =  () => {
  const router = useRouter();
  const [detal, setFoto] = useState();
  const [close, setClose] = useState(true);

  const onClick =  () => {
    setClose(null)
  }

  const onSelect = async (keys, info) => {
    setClose(true)
    if (info.node.isLeaf){const res_foto = await fetch(`http://127.0.0.1:8000/Name_without_use/${keys}`);
    if (res_foto.status == 200) {
      const json = await res_foto.json();
      setFoto(json);
      console.log(json)}
    // setFoto(res_foto) 
    }
    

  };
  const onExpand = (keys, info) => {
    
   

  };
  
  return (<>
    <DirectoryTree
      multiple
      draggable
      defaultExpandParent
     
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    
    />
    <div className='fix'>

    {close &&(detal && (<><div key={detal.ID} className='detail_tree'>
      <button onClick={onClick}>x</button><Link href={`/Name_without_use/${detal.ID}`}>
              <h1 key={detal.ID + 'Manufacturer'} >{detal.Наименование}</h1>
              <h4 key={detal.ID + 'num' }>OEM-{ detal.Номер}</h4>
               <p key={detal.ID + 'Product_name' }>{ detal.Примечание}</p>
               
                <h3 key={detal.ID + 'Price'}>{ detal.Цена} Руб</h3></Link>   
                <div className="carusel_img">
                <Carousel_img url ={detal.Фотография}/></div>
                </div>
              
                </>
                ))}
      {/* {detal &&(<Carousel_img url ={detal.Фотография}/>)} */}
      
   
   
      </div>
   </>
  );
};
export default Tree_detal;
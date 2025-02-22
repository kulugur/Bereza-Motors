import React from 'react';
import { ConfigProvider, Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carousel_img = (props) => (<>
    
  <div className='ful_foto'>
  <ConfigProvider
  theme={{
    components: {
      Carousel: {
        dotActiveWidth:50,
        dotHeight:8,
        dotWidth:50,
        arrowSize:40,
        arrowOffset: 60,
      },
    },
  }}
>
<Carousel arrows infinite={true}>
      
      
      
       {props.url.map(url=>( 
        <div key={url + "div"}>
        <img  key={url } src={url} width='400px' height='400px' ></img> 
        </div>
        ))} 
    
   
    
    </Carousel>
</ConfigProvider>
    
   

  </div>
  <div className='foter'>

  </div>
    </>
  
);
export default Carousel_img;

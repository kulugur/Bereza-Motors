'use client'
import Link from "next/link"
import { useState, useEffect } from 'react';

const Nav_bar = () =>{
	const [user, setUser] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetchUser() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user_my`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.status == 200) {
        const json = await res.json();
        setUser(json);
      } else {
        
      }
    }
    fetchUser();
  }, []);
  console.log(user)
    return(
        
        <div className="nav_2">
			<div className="reg">
        <div className="abaut"><h4><Link   href="/about">О Нас</Link></h4></div>
        <div className="reg_login">
        {user && (<h4 className="nav_emai">{user.email}</h4>)}    
			{user && (<Link  className="reg_btn"href="/profile">Личный кабинет</Link>)}
      {user &&(user.email == 'bereza-motors@mail.ru' && (<Link  className="reg_btn"href="/admin">Админ</Link>))}
      
			{user == null && (<Link  className="reg_a" href="/registration"><p>Регистрация</p></Link>)}	
			{user == null && (<Link  className="reg_a" href="/auth"><p>Вход</p></Link>)}
      </div>
				
				
			</div>
            <div className="nav_icon">
              <div className="whatsapp"><img src="img/whats.png" alt=""width="24" height="24"/><p>+7 927-024-57-79</p></div>
            
              <div className="img_icon"><Link   href="/catalog"><img src="img/catalog.png" alt=""width="24" height="24"/><p>Каталоги</p></Link>
              <Link   href="./basket"><img className="img_icon"  src="img/bascket.png" alt="" width="35" height="35"/></Link>
              </div>
            
				
				
			</div>
            <div >
				{/* <form> 
  					<input className="nav_search search"type="search" name="text"  placeholder="Что вы хотите найти?"/>
  					<input type="submit" name="submit" className="search_btn" value="Найти"/>
				</form> */}
			</div>
          
          <div className="nav_h1">
            <div className="bereza_logo">
            <img src="img/logo.png" width="200" height="200"></img></div>  
          <div className="logo_name">
            <h2>Авторвзбор</h2>
            <h1>Bereza-Motors</h1>
            
            </div>
          <div className="car_img">

          <img src="img/car.png" width="200" height="200"></img>
            </div>
            

          </div>
            <div className="nav_h2">
				
        
        
			</div>
            <div>
				{/* <form> 
  					<input className="nav_search search"type="search" name="text"  placeholder="Что вы хотите найти?"/>
  					<input type="submit" name="submit" className="search_btn" value="Найти"/>
				</form> */}
			</div>
            
        </div>  
        
		
      
    )}
export default Nav_bar    
import Link from "next/link"

const Foter = (props) =>(
<> 
    <div className="foter">
    <Link  href={"https://yandex.ru/maps/-/CHeraGI~"}><img  src={props.url}  width="500" height="300" /></Link>
    <div className="fut_info"><p>+79165147176 - Александр</p>
    <Link  href='https://t.me/Alex_Avax'><p>@Alex_Avax - телеграм</p></Link>
    <p>+375 29 6754436 - Анатолий</p>
     <Link  href='https://t.me/Avax_by'><p>@Avax_by - телеграм</p></Link>
    <p>+375 29 3118335 - Дмитрий</p>
    <Link  href='https://t.me/AVAX_MOTORS'><p>@AVAX_MOTORS - телеграм</p></Link></div>
    
     
     <Link  href={"./rules"}>
    
    
			<p>Правила заказа и возврыта</p>
       
			</Link>
            <Link  href={"./guarantee"}>
    
			<p>Гарантия на узлы, агоегаты и прочие запчасти</p>
       
			</Link>
            <Link  href={"/delivery"}>
			<p>Доставка и транспортировка заказа</p>
           
			</Link>
            <Link  href={"https://yandex.ru/maps/-/CHeraGI~"}>
			<p>Контакты и место положение пункта выдачи заказа</p>
           
			</Link>
            <Link  href={"/"}>
			<p>Дополнительные ссылки на торговые площадки</p>
           
			</Link>        
		
    </div>
    </>
          
    );
export default Foter
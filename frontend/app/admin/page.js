'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect   } from 'react';
import Link from "next/link"
import styles from './admin.css';
// /added_value/
export default function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
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

  async function registration(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const text = formData.get('text')
    const myfile = formData.get('myfile')
   
	
  
  const foto = "foto";

 

    setIsLoading(true);

    
    
    formData.append("file", myfile);
  
    formData.append("text", myfile);

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL+'/file/upload-file', {
      method: "POST",
      body: formData,
    });
  
    const body = (await response.json())

    // alert(body.message);

    if (body.status === "ok") {
      inputFileRef.current.value = "";
      // Do some stuff on successfully upload
    } else {
      // Do some stuff on error
    }

    setIsLoading(false);
  };
  const [added_value, setAdded_value] = useState('');
  


  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      added_value,
   
    };

    const res = fetch(`${process.env.NEXT_PUBLIC_API_URL+`/added_value/` +  data.added_value}`)

  }
  function download(){
    const res = fetch(`${process.env.NEXT_PUBLIC_API_URL+`/download/sample_export.csv`}`)
    console.log(res)
  }
  console.log(user)

  
  
  
  async function apply(){
    await fetch(`${process.env.NEXT_PUBLIC_API_URL+`/set_json`}`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify({ keyword: 'menaiala' }),
  })
    

   
}
  return (<> {user &&(user.email == 'bereza-motors@mail.ru' && (<div className='inputForm'>
     
      
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="Added value">Добавочная стоимость %:</label>
      <input
        id="added_value"
        type="number"
         placeholder='5'
        onChange={e => setAdded_value(e.target.value)}
      />
      
      <button type="submit">Сохранить</button>
    </form>
    <form onSubmit={registration}>
  <div>
    <input type="text" name="text"  defaultValue="sample_export.csv" />
    <input type="file" name="myfile"  accept=".csv"/>
  </div>
  <div>
    <input
      type="submit"
      value="Upload"
      disabled={isLoading}
      
    />
    {isLoading && ` Подождите...`}
  </div>
</form>
<Link  className="reg_a" href="http://127.0.0.1:8000/download/sample_export.csv" download><p>Скачать CSV</p></Link>

<button onClick={apply} type="submit">Применить</button>
  
</div>))}
    
    </> 
  );
}
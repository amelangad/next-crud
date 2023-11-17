 export default async function getUser (id) {
    try{
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
  cache: 'no-store',
  method: 'GET'
      })
    
  if(!res.ok){
      throw new Error ("error")
  }
  const response = await res.json();
  console.log(response)
  }
    catch(err){
      console.log('res')
    }
  
  }
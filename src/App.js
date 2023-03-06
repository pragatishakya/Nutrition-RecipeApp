import { useEffect, useState } from "react"
import Recipe from "./components/Recipe"
import './App.css' 

const App= ()=>{
  const APP_ID= 'dc34792b'
  const APP_KEY='3eab1a651f78f58e8b394f905f3efa21'

  const [search,setSearch]= useState('')
  const [query,setQuery]= useState('Chicken')
  const [dishes,setDishes]= useState([])

  useEffect(()=>{
    async function getData(){
      const res= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const response = await res.json()
      setDishes(response.hits)
      // console.log(response)
    }
    getData()
  },[query])

  const submitHandler= e=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return <div className="App">
  <form className="search-form" onSubmit={submitHandler}>
    <input type="text"  value={search} className="search-bar" onChange={e=> setSearch(e.target.value) }/>
    <button type="submit" className="search-button" >Submit</button>
  </form>
  <div className="recipes">
    {
      dishes.map((item,idx)=> <Recipe  recipeList={item} key={idx}/>)
    }
  </div>
  </div>
}

export default App



































































// // import {useState , useEffect} from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from "react-bootstrap"

// //id 65e4027a
// // key e18695430896a48a91b906c7237f47cf	—


// const App=()=>{

//   // const [title, setTitle] = useState('Test Title')

//   // useEffect(()=>{

//   // },[])

//   return <Container>
//     <Row>
//       <Col sm={6}>
//         Test
//       </Col>
//       <Col sm={6}>
//         Test
//       </Col>
//     </Row>
//   </Container>

// }

// export default App




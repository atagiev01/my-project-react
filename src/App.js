import Main from '/Users/asimtaghiyev/Desktop/project/src/Components/Main';
import Navbar from '/Users/asimtaghiyev/Desktop/project/src/Components/Navbar';
import Home from '/Users/asimtaghiyev/Desktop/project/src/Components/Home'
import '/Users/asimtaghiyev/Desktop/project/src/Styles/Main.css'
import { useState } from 'react';


const cars = [
  {
    src: "https://preview.colorlib.com/theme/ashion/img/product/product-7.jpg.webp",
    title: "Contrasting sunglasses", marka: "Bershka", price:"510", type: "Qadin"
  },
  {
    src: "https://preview.colorlib.com/theme/ashion/img/product/product-7.jpg.webp",
    title: "Contrasting", marka: "Zara", price:"599.99", type: "Qadin"
  },
  {
    src: "https://preview.colorlib.com/theme/ashion/img/product/product-4.jpg.webp",
    title: "a", description: "a ", price:"520", type: "Kişi",
  },
 
  {
    src: "https://preview.colorlib.com/theme/ashion/img/product/product-4.jpg.webp",
    title: "a", description: "a ", price:"50", type: "Kişi",
  },

  {
    src: "https://www.sheknows.com/wp-content/uploads/2022/02/Screen-Shot-2022-09-21-at-9.36.54-AM.png?w=798",
    title: "Kids-fashion", description: "a ", price:"50", type: "Kids",
  }
  ,
  {
    src: "https://www.sheknows.com/wp-content/uploads/2022/02/Screen-Shot-2022-09-21-at-9.36.54-AM.png?w=798",
    title: "Kids-fashion", marka: "Lc Waikiki", price:"50", type: "Kids",
  },
  {
    src: "https://www.sheknows.com/wp-content/uploads/2022/02/Screen-Shot-2022-09-21-at-9.36.54-AM.png?w=798",
    title: "Kids-fashion", marka: "Lc Waikiki", price:"50", type: "Kids",
  },  {
    src: "https://www.sheknows.com/wp-content/uploads/2022/02/Screen-Shot-2022-09-21-at-9.36.54-AM.png?w=798",
    title: "Kids-fashion", marka: "Lc Waikiki", price:"50", type: "Kids",
  },  {
    src: "https://www.sheknows.com/wp-content/uploads/2022/02/Screen-Shot-2022-09-21-at-9.36.54-AM.png?w=798",
    title: "Kids-fashion", marka: "Lc Waikiki", price:"50", type: "Kids",
  },  {
    src: "https://www.sheknows.com/wp-content/uploads/2022/02/Screen-Shot-2022-09-21-at-9.36.54-AM.png?w=798",
    title: "Kids-fashion", marka: "Lc Waikiki", price:"50", type: "Kids",
  },

  
]



function App() {
  const [searchQuery, setQuery] = useState('');
  const handleChanger = (event) => {
    setQuery(event.target.value);
}

return (
    <div className="">
      <Navbar
      handleChanger={handleChanger}
      />
	  <Home/>
    <Main searchQuery={searchQuery} cars={cars}
     />
    </div>
  );
}

export default App;
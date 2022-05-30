import {useState, useEffect} from 'react';
function App(){
  const [loading,setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  },[]);
  return(
    <div>
      <h1>The coins@ ({coins.length})</h1>
      {loading ? <strong>Loading...</strong>:null}
      <ul >
        {coins.map((coin)=> <li key={coin.id}>{coin.name}({coin.symbol})'s price:({coin.quotes.USD.price})</li>)}
      </ul>
    </div>
  ) 
};

export default App;
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Countryitem from "./components/Countryitem.jsx";
import Search from "./components/Search.jsx";
import Footer from "./components/Footer.jsx";
import flagDz from "./image/algeria flag.jpg";
import flagJapan from "./image/japan.jpg";
import flagPort from "./image/R.jpg";
const countries = [
  {
    name: "Algeria",
    continent: "Africa",
    flag:
      "https://th.bing.com/th/id/R.92f351735d81055ff265db82ad27a54b?rik=ntTEUCRP0w2Kng&riu=http%3a%2f%2fs1.bwallpapers.com%2fwallpapers%2f2014%2f05%2f29%2falgeria-flag-flag_121216135.jpg&ehk=q5ugAYZxBDKtlbO13Tm1ZjplYc1nY8n%2beM5nu5yvibA%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "Portugal",
    continent: "Europe",
    flag:
      "https://th.bing.com/th/id/OIP.rHh0JWZySjUCKPtRbxcfwAHaE8?rs=1&pid=ImgDetMain"
  },
  {
    name: "Japan",
    continent: "Asia",
    flag:
      "https://th.bing.com/th/id/OIP.saY-voLLhWCQaFvKoLwB_gHaE8?rs=1&pid=ImgDetMain"
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Search />
        <div className="countries-container">
          {countries.map(function(country) {
            return (
              <Countryitem
                name={country.name}
                continent={country.continent}
                flag={country.flag}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

let numbers = [1, 2, 5, 9, 7, 15];
let doubles = numbers.map(function(valeur) {
  return valeur * 2;
});
console.log(doubles);

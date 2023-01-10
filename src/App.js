
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Cards } from './Cards';



function App() {
  return (
    <div className="App">
      <List/>
      <Table/>
    </div>

  );
}



function List(){
  return <div class="Header">
    <nav><h1>🌠Start Bootstrap</h1>
  <li>Themes></li>
  <li>Templates></li>
  <li>Forms</li>
  <li>Bundle></li>
  <li>Resources></li></nav></div>;
}

function Table(){
  const pricecards = [
      {
        plan: "FREE",
        price: "0",
        features:
          [
            {
              usersHighlight: false,
              title: "Single User"
            },
            {
              title: "5GB Storage"
            },
            {
              title: "Unlimited Public Projects"
            },
            {
              title: "Community Access"
            },
            {
              listType: true,
              title: "Unlimited Private Projects"
            },
            {
              listType: true,
              title: "Dedicated Phone Support"
            },
            {
              listType: true,
              title: "Free Subdomain"
            },
            {
              listType: true,
              title: "Monthly Status Reports"
            }
          ],
        buttonType: "submit"
      },
      {
        plan: "PLUS",
        price: "9",
        features:
          [
            {
              usersHighlight: true,
              title: "5 Users"
            },
            { 
              title: "50GB Storage" 
            },
            { 
              title: "Unlimited Public Projects"
            },
            { title: "Community Access" },
            { title: "Unlimited Private Projects" },
            { title: "Dedicated Phone Support" },
            { title: "Free Subdomain" },
            {
              listType: true,
              title: "Monthly Status Reports"
            }
          ],
        buttonType: "submit"
      },
      {
        plan: "PRO",
        price: "49",
        features:
          [
            {
              usersHighlight: true,
              title: "Unlimited Users"
            },
            { title: "150GB Storage" },
            { title: "Unlimited Public Projects" },
            { title: "Community Access" },
            { title: "Unlimited Private Projects" },
            { title: "Dedicated Phone Support" },
            {
              usersHighlight: true,
              title: "Unlimited Free Subdomains"
            },
            { title: "Monthly Status Reports" }
          ],
        buttonType: "submit"
      }
    ]
    return (
      <div className="container py-5">
        <div className="row">
          {
            pricecards.map((ele) => {
              return <Cards ele={ele}></Cards>
            })
          }
        </div>
      </div>
    );
  }


export default App;

import { useState, useEffect } from 'react';


function Header({title}) {
  return (<h1>{title ? title : 'Default Title'}</h1>);
};


export default function Homepage() {
  const [likes, setLikes] = useState(0);

  // TODO: Need to sort drivers by points when hydrating DOM
  const racers = [
    { "firstName": "Max",       "lastName": "Verstappen", "team": "Red Bull Racing",  "points": 119,  "nationality": "Netherlands" },
    { "firstName": "Sergio",    "lastName": "Perez",      "team": "Red Bull Racing",  "points": 105,  "nationality": "Mexico" },
    { "firstName": "Fernando",  "lastName": "Alonso",     "team": "Aston Martin",     "points": 75,   "nationality": "Spain" },
    { "firstName": "Lewis",     "lastName": "Hamilton",   "team": "Mercedes",         "points": 56,   "nationality": "United Kingdom" },
    { "firstName": "Carlos",    "lastName": "Sainz",      "team": "Ferrari",          "points": 44,   "nationality": "Spain" },
    { "firstName": "George",    "lastName": "Russell",    "team": "Mercedes",         "points": 40,   "nationality": "United Kingdom" },
    { "firstName": "Charles",   "lastName": "LeClerc",    "team": "Ferrari",          "points": 34,   "nationality": "Monaco" },
    { "firstName": "Lance",     "lastName": "Stroll",     "team": "Aston Martin",     "points": 27,   "nationality": "Canada" },
    { "firstName": "Lando",     "lastName": "Norris",     "team": "McLaren",          "points": 10,   "nationality": null },
    { "firstName": "Pierre",    "lastName": "Gasly",      "team": "Alpine",           "points": 8,    "nationality": "France" },
    { "firstName": "Nico",      "lastName": "Hulkenberg", "team": "Haas F1 Team",     "points": 6,    "nationality": "Germany" },
    { "firstName": "Esteban",   "lastName": "Ocon",       "team": "Alpine",           "points": 6,    "nationality": null },
    { "firstName": "Valtteri",  "lastName": "Bottas",     "team": "Alfa Romeo",       "points": 4,    "nationality": null },
    { "firstName": "Oscar",     "lastName": "Piastri",    "team": "McLaren",          "points": 4,    "nationality": null },
    { "firstName": "Zhou",      "lastName": "Guanyu",     "team": "Alfa Romeo",       "points": 2,    "nationality": "China" },
    { "firstName": "Yuki",      "lastName": "Tsunoda",    "team": "AlphaTauri",       "points": 2,    "nationality": "Japan" },
    { "firstName": "Kevin",     "lastName": "Magnussen",  "team": "Haas F1 Team",     "points": 2,    "nationality": "Denmark" },
    { "firstName": "Alexander", "lastName": "Albon",      "team": "Williams",         "points": 1,    "nationality": "Thailand" },
    { "firstName": "Logan",     "lastName": "Sargeant",   "team": "Williams",         "points": 0,    "nationality": "United States" },
    { "firstName": "Nyck",      "lastName": "De Vries",   "team": "AlphaTauri",       "points": 0,    "nationality": null },
  ]

  // Handles Clicks
  function handleClick() {
      setLikes(likes + 1)
  }

  return (
    <div>

      <button onClick={handleClick}>Like</button>
      <p>Current Likes: {likes}</p>
    
      <h1>2023 Formula 1 Driver Standings</h1>

      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Points</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {racers.map((row) => (
            <tr>
              <td>{racers.indexOf(row) + 1}</td>
              <td>{row.points}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}
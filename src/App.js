import { Fragment, useState } from "react";
import "./App.css";
import axios from "axios";
import Button from "./components/button";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = () => {
    setActiveLink(0);
    setLoading(true);
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  const icons = [
    "fas fa-user fa-4x",
    "fas fa-envelope fa-4x",
    "fas fa-calendar-alt fa-4x",
    "fas fa-map-marker fa-4x",
    "fas fa-phone fa-4x",
    "fas fa-lock fa-4x",
  ];

  const PhraseGenerator = ({ user }) => {
    const phrases = [
      `Hi my name is ${user.name.first} ${user.name.last}`,
      `My email address is ${user.email}`,
      `I was born on ${user.dob.date.slice(0, 10)}`,
      `My country is ${user.location.country}`,
      `My phone number is ${user.phone}`,
      `My password is ${user.login.password}`,
    ];
    return <h1>{phrases[activeLink]}</h1>;
  };

  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };

  const style = {
    color: "grey",
  };
  return (
    <div className="App">
      <h1> Random User Generator</h1>
      <Button isActive={activeUser} clicked={onClickHandler} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="app__user">
          {userData.map((user, index) => {
            return (
              <Fragment key={user.cell}>
                <img src={user.picture.large} alt="#"></img>
                <PhraseGenerator user={user} className="phrases" />
                <div className="app__icons">
                  {icons.map((icon, index) => {
                    return (
                      <i
                        className={icon}
                        key={index}
                        onMouseEnter={() => activeLinkHandler(index)}
                        style={activeLink === index ? style : null}
                      ></i>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;

import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
// import { Console } from "console";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
${Header(state)}
${Nav(store.Links)}
${Main(state)}
${Footer()}
`;
  afterRender(state);
  router.updatePageLinks();
}
function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  // if (state.view === "Habit") {
  //   document.querySelector("form").addEventListener("submit", event => {
  //     event.preventDefault();

  //     const inputList = event.target.elements;
  //     console.log("Input Element List", inputList);
  //   }
  //     const requestData = {
  //       habit: inputList.habit.value,
  //       action: inputList.action.value};
  //       console.log("request Body", requestData);

  //       axios
  //       .post(`${process.env.HABIT_TRACKER_API_URL}/habits`, requestData)
  //       .then(response => {
  //         store.Habit.habits.push(response.data);
  //         router.navigate("/Habit");
  //       })
  //       .catch(error => {
  //         console.log("TERRIBLE DANGER", error);
  //       })
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            // Replace the key provided here with your own key from openweathermap
            `https://api.openweathermap.org/data/2.5/weather?q=anniston&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;
      // New Case for HABIT View
      case "Habit":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.HABIT_TRACKER_API_URL}/habits`)
          .then(response => {
            // Storing retrieved data in state
            console.log(response.data);
            store.Habit.habits = response.data;
            done();
          })
          .catch(error => {
            console.log("Error", error);
            done();
          });
        break;
      case "Affirmation":
        axios
          .get(
            // Replace the key provided here with your own key
            `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY}&tag=encourage&rating=pg-13`
          )
          .then(response => {
            store.Affirmation.gif = response.data;
            console.log(store.Affirmation.gif.data.url);
            done();
          })
          .catch(error => {
            console.log(error);
            done();
          });
        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

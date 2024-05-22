// import App's dependencies, hooks and child components
import Joke_Ctn from "./Joke_Ctn";
import Axios from "axios";
import { useEffect, useState } from "react";


function App() {

  // initialize app's state
  var [ appState, setAppState ] = useState(
    { 
      loadStatus: "loading",
      data: "",
      langCode: "en"
    }
  );
  const [ url, setUrl ] = useState(`https://v2.jokeapi.dev/joke/Any?type=twopart&lang=${ appState.langCode }`);

  // loadJoke()
  // for loading jokes from the Joke API 
  async function loadJoke() {
    try {
      // fetch joke data from the API using axios.js
      var response = await Axios( url );

      if ( response.status == 200 ) {
        return `${response.data.setup} ${response.data.delivery}`
      } else {
        throw "error"
      }
    }
    catch( error ) {
      return "error"
    }
  }

  // loadNewJoke()
  // for fetching jokes from API and updating app's state with it
  async function loadNewJoke() {
    if ( appState.loadStatus == "loaded" ) {
      setAppState({
        loadStatus: "loading",
        ...appState
      })
    }

    var jokeData = await loadJoke();

    if ( jokeData != "error" ) {
      setAppState({
        ...appState,
        loadStatus: "loaded",
        data: jokeData,
      })
    } else {
      setAppState({
        ...appState,
        loadStatus: "error"
      })
    }
  }

  // setJokeLanguage()
  // for setting joke language
  function setJokeLangauge( newLangCode ) {
    setAppState({
      ...appState,
      langCode: newLangCode
    })

    setUrl(`https://v2.jokeapi.dev/joke/Any?type=twopart&lang=${ newLangCode }`);
  }

  // "on component mount", perform initial joke fetch and update page
  // then, subsequently update, if "url" changes
  useEffect( function() {
    loadNewJoke()
  }, [ url ] )

  return (
    // app-markup-container
    <div id="app" className="w-11/12 h-4/6 md:h-2/6 md:w-1/2 xl:h-1/2 flex flex-col">

      {/* joke_ctn to display joke-load-states and joke data */}
      <Joke_Ctn loadState={ appState.loadStatus } joke={ appState.data } 
        language={ appState.langCode } setLanguageHandler={ setJokeLangauge }/>

      {/* load new btn - to load new joke from API */}
      <button id="load-new-btn" 
        className="border-b-2 border-l-2 border-black pb-1 px-1.5 hover:border-gray-500 transition-all duration-300 capitalize font-medium h-fit w-fit"
        onClick={ loadNewJoke }>
        load new joke
      </button>
    </div>
  )
}


export default App;
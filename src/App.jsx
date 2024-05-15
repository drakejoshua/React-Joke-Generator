function App() {
  var languages = [
    {
      language: "english",
      langCode: "en"
    },
    {
      language: "french",
      langCode: "fr"
    },
    {
      language: "spanish",
      langCode: "es"
    },
    {
      language: "dutch",
      langCode: "nl"
    }
  ];

  return (
    // app-markup-container
    <div id="app">

      {/* quote ctn */}
      <div id="quote-ctn">

        {/* loading pane - to display loading UI */}
        <div id="loading-pane">
          <span className="material-symbols-outlined">
            autorenew
          </span>

          <p>
            loading quote
          </p>
        </div>
        
        {/* error pane - to display error UI */}
        <div id="error-pane">
          <span className="material-symbols-outlined">
            sync_problem
          </span>

          <p>
            error loading quote
          </p>
        </div>

        {/* loaded pane - to display quote, author and all other 
         data after loading from API*/}
        <div id="loaded-pane">

          {/* language selection ctn */}
          <div id="language-select-ctn">
            <label htmlFor="language-select">
              language:
            </label>

            {/* language select */}
            <select id="language-select">
              {
                languages.map( ( language, index ) => {
                  return (
                    <option value={ language.langCode } key={ index }>
                      {
                        language.language
                      }
                    </option>
                  );
                })
              }
            </select>
          </div>
          
          {/* quote ctn - contains quote, author, etc */}
          <div id="quote-ctn">
            <span className="material-symbols-outlined">
              format_quote
            </span>

            <div>
              <p id="quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sit fugiat reprehenderit ad, facilis dolorum doloribus. 
                Tempora ea esse sapiente architecto?
              </p>

              <p id="author">
                joshua mabawonku
              </p>
            </div>

          </div>

        </div>
        
      </div>

      {/* load new btn - to load new quote from API */}
      <button id="load-new-btn">
        load new quote
      </button>
    </div>
  )
}


export default App;
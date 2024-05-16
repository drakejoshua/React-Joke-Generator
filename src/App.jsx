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
    <div id="app" className="w-1/2 h-1/2 flex flex-col">

      {/* quote ctn */}
      <div id="quote-ctn" className="w-full flex-grow">

        {/* loading pane - to display loading UI */}
        <div id="loading-pane" className="display-ui hidden">
          <span className="material-symbols-outlined display-ui__display-icon">
            autorenew
          </span>

          <p className="display-ui__display-text">
            loading quote
          </p>
        </div>
        
        {/* error pane - to display error UI */}
        <div id="error-pane" className="display-ui hidden">
          <span className="material-symbols-outlined display-ui__display-icon">
            sync_problem
          </span>

          <p className="display-ui__display-text">
            error loading quote
          </p>
        </div>

        {/* loaded pane - to display quote, author and all other 
         data after loading from API*/}
        <div id="loaded-pane">

          {/* language selection ctn */}
          <div id="language-select-ctn">
            <label htmlFor="language-select" className="capitalize font-medium">
              language:
            </label>

            {/* language select */}
            <select id="language-select" className="capitalize focus-within:outline-none focus:outline-none">
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
          <div id="quote-ctn" className="flex gap-x-4 items-center mt-16">
            <span className="material-symbols-outlined text-9xl h-fit w-fit inline-block" style={ { transform: "scale(-1)" } }>
              format_quote
            </span>

            <div className="flex-grow-1">
              <p id="quote" className="text-2xl italic font-medium mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sit fugiat reprehenderit ad, facilis dolorum doloribus. 
                Tempora ea esse sapiente architecto?
              </p>

              <p id="author" className="capitalize text-lg font-normal">
                joshua mabawonku
              </p>
            </div>

          </div>

        </div>
        
      </div>

      {/* load new btn - to load new quote from API */}
      <button id="load-new-btn" 
        className="border-b-2 border-l-2 border-black pb-1 px-1.5 hover:border-gray-500 transition-all duration-300 capitalize font-medium h-fit w-fit">
        load new quote
      </button>
    </div>
  )
}


export default App;
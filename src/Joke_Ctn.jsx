// import component dependency
import PropTypes from 'prop-types';


function Joke_Ctn( props ) {
    // langauges list containing languages and language codes supported by the app
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
          language: "german",
          langCode: "de"
        }
    ];

    return (
        <div id="quote-ctn" className="w-full flex-grow">

            {/* loading pane - to display loading UI */}
            { 
                ( props.loadState == "loading" ) && <div id="loading-pane" className="display-ui flex">
                    <span className="material-symbols-outlined display-ui__display-icon animate-spin">
                        autorenew
                    </span>

                    <h2 className="display-ui__display-text">
                        loading joke
                    </h2>
                </div> 
            }
            
            {/* error pane - to display error UI */}
            {
                ( props.loadState == "error" ) && <div id="error-pane" className="display-ui flex">
                <span className="material-symbols-outlined display-ui__display-icon animate-pulse">
                    sync_problem
                </span>

                <h2 className="display-ui__display-text">
                    error loading joke
                </h2>
                </div>
            }

            {/* loaded pane - to display quote, author and all other 
             data after loading from API*/}
            {
                ( props.loadState == "loaded" ) && <div id="loaded-pane">

                {/* language selection ctn */}
                <div id="language-select-ctn" className="flex gap-x-1">
                    <label htmlFor="language-select" className="capitalize font-medium">
                        language:
                    </label>

                    {/* language select */}
                    <select id="language-select" className="capitalize bg-white focus-within:outline-none focus:outline-none"
                        onChange={ ( event ) => { props.setLanguageHandler( event.target.value ) } }
                        defaultValue={ languages.find( function( language) {
                            return ( language.langCode == props.langCode )
                        } ) }>
                        
                        {/* loop through each language and create corresponding option */}
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
                <div id="quote-ctn" className="flex gap-x-4 xl:items-center mt-16">
                    <span className="material-symbols-outlined text-3xl xl:text-9xl h-fit w-fit inline-block">
                        sentiment_very_satisfied
                    </span>

                    <div className="flex-grow-1">
                        <h1 id="quote" className="text-2xl italic font-medium text-black">
                            {
                                props.joke
                            }
                        </h1>
                    </div>
                </div>
                </div>
            }
        </div>
    );
}


// create prop-types declarations for component props
// to ensure type safety and proper code linting
Joke_Ctn.propTypes = {
    loadState: PropTypes.string.isRequired,
    langCode: PropTypes.string,
    joke: PropTypes.string,
    setLanguageHandler: PropTypes.func
}


export default Joke_Ctn;
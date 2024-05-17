// import component dependency
import PropTypes from 'prop-types';


function Quote_Ctn() {
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
        <div id="quote-ctn" className="w-full flex-grow">

            {/* loading pane - to display loading UI */}
            <div id="loading-pane" className="display-ui flex">
                <span className="material-symbols-outlined display-ui__display-icon animate-spin">
                    autorenew
                </span>

                <h2 className="display-ui__display-text">
                    loading quote
                </h2>
            </div>
            
            {/* error pane - to display error UI */}
            <div id="error-pane" className="display-ui hidden">
                <span className="material-symbols-outlined display-ui__display-icon animate-pulse">
                    sync_problem
                </span>

                <h2 className="display-ui__display-text">
                    error loading quote
                </h2>
            </div>

            {/* loaded pane - to display quote, author and all other 
            data after loading from API*/}
            <div id="loaded-pane" className="hidden">

                {/* language selection ctn */}
                <div id="language-select-ctn" className="flex gap-x-1">
                    <label htmlFor="language-select" className="capitalize font-medium">
                        language:
                    </label>

                    {/* language select */}
                    <select id="language-select" className="capitalize bg-white focus-within:outline-none focus:outline-none">
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
                    <span className="material-symbols-outlined text-3xl xl:text-9xl h-fit w-fit inline-block" style={ { transform: "scale(-1)" } }>
                        format_quote
                    </span>

                    <div className="flex-grow-1">
                        <h1 id="quote" className="text-2xl italic font-medium mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit fugiat reprehenderit ad, facilis dolorum doloribus. 
                        Tempora ea esse sapiente architecto?
                        </h1>

                        <p id="author" className="capitalize text-lg font-normal">
                        joshua mabawonku
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


// create prop-types declarations for component props
// to ensure type safety and proper code linting
Quote_Ctn.propTypes = {
    loadState: PropTypes.string.isRequired,
    language: PropTypes.string,
    quote: PropTypes.string,
    author: PropTypes.string,
    setLanguageHandler: PropTypes.func
}


export default Quote_Ctn;
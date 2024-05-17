// import App's dependencies and child components
import Quote_Ctn from "./Quote_Ctn";


function App() {
  return (
    // app-markup-container
    <div id="app" className="w-11/12 h-4/6 md:h-2/6 md:w-1/2 xl:h-1/2 flex flex-col">

      {/* insert quote ctn here */}
      <Quote_Ctn loadState="hello"/>

      {/* load new btn - to load new quote from API */}
      <button id="load-new-btn" 
        className="border-b-2 border-l-2 border-black pb-1 px-1.5 hover:border-gray-500 transition-all duration-300 capitalize font-medium h-fit w-fit">
        load new quote
      </button>
    </div>
  )
}


export default App;
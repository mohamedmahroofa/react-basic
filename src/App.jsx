import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButtons from "./components/TabButtons.jsx";

function App() {
  function handleSelect(){
    console.log("A better way to add it dynamically");
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={handleSelect}>Components</TabButtons>
            <TabButtons onSelect={handleSelect}>JSX</TabButtons>
            <TabButtons onSelect={handleSelect}>Props</TabButtons>
            <TabButtons onSelect={handleSelect}>State</TabButtons>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

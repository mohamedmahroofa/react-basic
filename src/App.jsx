import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButtons from "./components/TabButtons.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
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
            <TabButtons onSelect={() => handleSelect("components")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect("props")}>
              Props
            </TabButtons>
            <TabButtons onSelect={() => handleSelect("state")}>
              State
            </TabButtons>
          </menu>
        </section>
        <div className="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;

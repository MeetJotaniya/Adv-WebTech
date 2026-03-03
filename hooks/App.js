import './App.css';
import React from 'react';

// LAB-21
import Counter from './Counter.js';
import HelloWorld from './HelloWorld.js';
import ActionStateDemo from './ActionStateDemo.js';
import CallbackDemo from './CallbackDemo.js';

// LAB-22
import A from './A.js';
import AContext from './AContext.js';
import DebugValueDemo from './DebugValueDemo.js';
import DeferredValueDemo from './DeferredValueDemo.js';

// LAB-23
import PrimeSum from './PrimeSum.js';
import PrimeSumMemo from './PrimeSumMemo.js';

// LAB-24
import UseRefDemo from './UseRefDemo.js';

function App() {
  return (
    <div className="App" style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "left" }}>
      <h1>React Hooks Demonstrations</h1>
      <p>This application contains all solutions for Lab-21 to Lab-24.</p>

      <section>
        <h2>--- LAB-21 ---</h2>
        <Counter />
        <HelloWorld />
        <ActionStateDemo />
        <CallbackDemo />
      </section>

      <section>
        <h2>--- LAB-22 ---</h2>
        <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
          <h3>Prop Drilling Demo</h3>
          <A />
        </div>
        <AContext />
        <DebugValueDemo />
        <DeferredValueDemo />
      </section>

      <section>
        <h2>--- LAB-23 ---</h2>
        <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
          <PrimeSum />
        </div>
        <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
          <PrimeSumMemo />
        </div>
      </section>

      <section>
        <h2>--- LAB-24 ---</h2>
        <UseRefDemo />
      </section>
    </div>
  );
}

export default App;

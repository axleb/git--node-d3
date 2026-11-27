# JavaScript Closure: Counter Flow

Blue text shows JavaScript from the counter example. The click handler reuses the function created during setup.

```mermaid
flowchart TD
    subgraph Setup["Once: page loads"]
        A["const increment = makeCounter();"] --> B["console.log('makeCounter ran');"]
        B --> C["let count = 0;"]
        C --> D["return () =&gt; { … };"]
        D --> Stored["The returned function is stored in increment"]
        Stored --> Registered["document.querySelector('#increment-counter').onclick = () =&gt; { … };"]
    end

    subgraph Click["Every click: Add one"]
        E["Browser runs the onclick handler"] --> F["document.querySelector('#count').value = increment();"]
        F --> Log["console.log('increment ran');"]
        Log --> G["return ++count;"]
        G --> H["The assignment finishes and displays the new count"]
    end

    Registered -. "Wait for a click" .-> E
    Stored -. "The same function is reused" .-> Log

    classDef javascript fill:#eff6ff,stroke:#2563eb,color:#1e40af,font-family:monospace;
    class A,B,C,D,Registered,F,Log,G javascript;
```

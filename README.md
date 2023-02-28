# ReactRendering

## Re-Render scenario

Render Phase and Commit Phase

Render Phase :

1. Find all elements flagged for updates
2. For each flagged component, convert JSX to React element and store the result
3. Perform reconciliation - Dif old and new tree of React elements (a.k.a Virtual DOM)
4. Hand over the changeas to the next phase

Commit Phase :

1. Apply changes to the DOM.

# ReactRendering

## Ways to cause re-render

1. Components calls useState setter function or useReducer deispatch function
2. if parent component re-render
3. React context

## Re-Render scenario

Render Phase and Commit Phase

Render Phase :

1. Find all elements flagged for updates
2. For each flagged component, convert JSX to React element and store the result
3. Perform reconciliation - Dif old and new tree of React elements (a.k.a Virtual DOM)
4. Hand over the changeas to the next phase

Commit Phase :

1. Apply changes to the DOM.

# Parent and Child

Whenever there is a re-render caused by a change in the state of the parent, React will optimize the re-render for you by knowing that the props has to be referencing the same elemeent before and after the render

You can extract the expensive child component and instead pass it down as props to the parent component

Optimization :

- Same Element Reference : <br>
  When parent state changes : Yes <br>
  When parent props changes : No

      //ParentOne.js
      function ParentOne({ children })
          return <div> {children} </div>

- React.memo : <br> When child props is not affected but has to rerender

      //ChildTwo.js
      export const MemoizedChildTwo = React.memo(ChildTwo);

# Incorrect memo with children

1.  Incorrect memo with children : No need to wrap your child component with react memo, if the child component itself has children elements.

        //ChildThree.js
        function ChildThree({ children })
            return <div> {children} </div>

        export const MemoizedChildTwo = React.memo(ChildThree);

2.  Incorrect memo with Impure Component : Using memo in a child that still needs to update its JSX like date,time,sec or randomize number

3.  Incorrect memo with props Reference : When an object or method is passed down to the child component from the parent component. The parent component re-render causes the new reference of the obj or method thats passed down as props to the child component to re-render.

        Passing in obj or methods :

            function App() {
              const person = {
                fname: "",
                lname: "",
              };

        <ChildComponent person={person} method={method} />

# useMemo and useCallback

Go back and take a look at the useMemo & useCallback hooks

Fix to issue 3 :

- useMemo : instead of passing person obj as a props, pass in memoizedPerson

      const memoizedPerson = useMemo(()=> person)

- useCallback :

      const memoizedHandleClick = useCallback(handleClick, [])

ChildComponent

    <ChildComponent person={memoizedPerson} method={memoizedHandleClick} />

# Context and Render

How context works :

    App -> Parent -> ChildA -> ChildB -> ChildC

    Parent - count state / CountContext.Provider
    ChildC - useContext count

How context render works :

    state count changes ->
    Flag Parent for re-render ->
    Parent renders ContextProvider ->
    Check ContextProvider value changes ->
    React makes it way down to Render component ChildC

    Parent Component will render childA-C by default.
    Context in this case did nothing.
    Context is use to avoid props drilling.

## Optimize the context rendering

1. Use react memo :

ContextParent.js

    import { MemoizedChildA } from "./ContextChildren";

    <CountProvider value={count}>
      <MemoizedChildA />
    </CountProvider>

ContextChildren.js

    export const MemoizedChildA = React.memo(ChildA);

2. Context and Same Element Reference

Make use of the children props. React know that the state was change. The children props ChildA hasn't been modified so, it only re-render component childC as it consumes a context value, whose valuse has been changed.

App.js

      <ContextParent>
        <ChildA />
      </ContextParent>

ContextParent.js

      <CountProvider value={count}>
        {children}
      </CountProvider>

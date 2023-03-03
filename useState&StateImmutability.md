# useState

    NOTE : Remeber that it can re-render but not apply to the dom if there is no difference.
    NOTE : useReducer was the same, but React version 18, it is different

Render Phase :

1. Flag component of state changes

   - If initial render is completed and the value is the same passed in the setter function, proceeding further is stopped
   - However if the component has been re-render already then it proceeds (**still re-render**)

2. JSX createElement()
3. Compare Previous Render to New Render react elements
   - Discard changes if there is no difference else
   - Changes are made(update,UseState)

Commit Phase :

5. Apply changes to the dom.

# State Immutability

Object - set state object correctly

    const intiState = {fname: "B" , lnamed: "W"}
    const [person, setPerson] = useState(initState)

    const newPerson = {...person}
    newPerson.fname = "Clerk"
    newPerson.lname = "Kent"
    setPerson(newPerson)

Array - set state array correctly

    const intiState = ["B" , "W"]
    const [person, setPerson] = useState(initState)

    const newPerson = [...person]
    newPerson.push = ("Clerk")
    newPerson.push = ("Kent")
    setPerson(newPerson)

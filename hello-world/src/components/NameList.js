import React from 'react'

function NameList() {
    // const names = ['React','Angular','Node']    
    // return (
    //     <div>
    //         {
    //             names.map(nm => <h2>{nm}</h2>)
    //         }
    //     </div>
    // )

    // or

    // const names = ['React','Angular','Node']  
    // const nameList = names.map(nm => <h2>{nm}</h2>)
    // return (
    //     <div>{nameList}</div>
    // )


    //or, to be extended

    const persons = [
        {
            name: 'React',
            age: 7
        },
        {
            name: 'Angular',
            age: 10
        },
        {
            name: 'Node',
            age: 9
        }
    ]
    const personList = persons.map(persn => <h1>I am {persn.name} and I am {persn.age} years old</h1>)

    return <div>{personList}</div>
}

export default NameList

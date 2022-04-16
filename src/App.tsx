import React from 'react'
import DropdownMenu from "./DropdownMenu";

function App() : JSX.Element {
    return (
        <>
            <div className='flex gap-x-2 w-full justify-center'>
                <DropdownMenu
                    title='Shopping List'
                    items={['Chocolate', 'Coffee', 'Milk', 'Eggs', 'Bacon', 'Avocardo', 'Cheese', 'Tomatos']}
                />
                <DropdownMenu
                    title='Ingredience'
                    items={['Flour', 'Milk', 'Eggs', 'Sugar', 'Chocolate']}
                />
                <DropdownMenu
                    title='Gifts'
                    items={['Lego', 'Mug cup', 'Shoes', 'Hat', 'PS5', 'Phone', 'Book', 'Cake', 'Wine', 'Gift Cards']}
                />
            </div>
        </>
    )
}

export default App;

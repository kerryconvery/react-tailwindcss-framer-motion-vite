import React from "react";
import DropdownMenu from "./DropdownMenu";

function MenuBar(): JSX.Element {
    return (
        <div className='h-24 flex gap-x-2'>
            <DropdownMenu
                title='Shopping List'
                items={['Chocolate', 'Coffee', 'Milk', 'Eggs', 'Bacon', 'Avocado', 'Cheese', 'Tomatoes']}
            />
            <DropdownMenu
                title='Ingredients'
                items={['Flour', 'Milk', 'Eggs', 'Sugar', 'Chocolate']}
            />
            <DropdownMenu
                title='Gifts'
                items={['Lego', 'Mug cup', 'Shoes', 'Hat', 'PS5', 'Phone', 'Book', 'Cake', 'Wine', 'Gift Cards']}
            />
        </div>
    )
}

export  default MenuBar

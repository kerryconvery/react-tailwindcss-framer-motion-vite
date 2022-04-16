import React from 'react'
import { motion } from 'framer-motion'

const dropdown = {
    collapsed: {
        height: 30
    },
    expanded: {
        height: 150,
        transition: {
            duration: 1,
            type: 'spring',
            damping: 25,
            stiffness: 100
        }
    },
}

const dropdownItem = {
    unselected: {
        backgroundColor: '#ffffff'
    },
    selected: {
        backgroundColor: '#cbd5e1',
    }
}

type DropdownMenuProps = {
    title: string,
    items: string[]
}
function DropdownMenu({ title, items }: DropdownMenuProps)  {
    return (
        <motion.div
            className='w-32 relative rounded-b-md border-slate-50 border-solid border-2 bg-white overflow-hidden text-center shadow-md'
            initial='collapsed'
            whileHover='expanded'
            variants={dropdown}
        >
            <label className='font-bold text-sky-400'>{title}</label>
            <div className='pb-1' />
            <MenuItems items={items}/>
        </motion.div>
    )
}

type MenuItemsProps = {
    items: string[]
}

function MenuItems({ items }: MenuItemsProps): JSX.Element {
    return (
        <div className='relative text-black overflow-auto h-28'>
            {items.map((item, index) => (
                <motion.div initial='unselected' whileHover='selected' variants={dropdownItem}>
                    <div key={index} className='h-6 hover:cursor-pointer'>{item}</div>
                </motion.div>
            ))}
        </div>
    )
};

export default DropdownMenu

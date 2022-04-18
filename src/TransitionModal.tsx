import React, {useState} from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
    className?: string,
    children: string,
    onClick?: () => void
}

function Button({ className, children, onClick }: ButtonProps) {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-32 text-center ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

type ModalProps = {
    isOpen: boolean,
    onClose: () => void
}

function Modal({ isOpen, onClose }: ModalProps) {
    return (
        <motion.div
            className='absolute rounded-md border-2 border-solid border-slate-50 bg-white w-96 h-64 text-center shadow-lg'
            initial={false}
            animate={{ y: isOpen ? 0 : -600 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className='relative w-full h-full' >
                <h2 className='pt-3'>Drop-in Modal</h2>
                <Button className='relative top-40' onClick={onClose}>Close</Button>
            </div>
        </motion.div>
    )
}

function TransitionModal() {
    const [ modalOpen, setModalOpen ] = useState(false)

    const showModel = () => {
        setModalOpen(true)
    }

    const hideModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <Button onClick={showModel}>Show Modal</Button>
            <Modal isOpen={modalOpen} onClose={hideModal} />
        </>
    )
}

export default TransitionModal

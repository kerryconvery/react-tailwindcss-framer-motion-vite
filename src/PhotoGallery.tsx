import React from 'react'
import { motion } from 'framer-motion'

type PhotoGalleryProps = {
    photos: string[]
}

function PhotoGallery({ photos }: PhotoGalleryProps): JSX.Element {
    const image = {
        initial: {
            scale: 1
        },
        hovered: {
            scale: 2,
            transition: {
                duration: 1,
            }
        },
    }

    return (
        <div className='flex items-center gap-x-1 relative h-96 overflow-x-auto'>
            {photos.map((photo, index) => (
                    <motion.img
                        className='shrink-0 h-48 w-64 hover:cursor-pointer'
                        initial='initial'
                        whileHover='hovered'
                        exit='exit'
                        variants={image}
                        src={photo}
                        key={index}
                    />
                ))}
        </div>
    )
}

export default PhotoGallery

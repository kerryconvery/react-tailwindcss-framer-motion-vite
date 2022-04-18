import React from 'react'
import DropdownMenu from "./DropdownMenu";
import PhotoGallery from "./PhotoGallery";
import MenuBar from "./MenuBar";
import TransitionModal from "./TransitionModal";

const photos: string[] = [
    './assets/beach-gdb109c8be_1920.jpg',
    './assets/lake-g45b85d4a1_1280.jpg',
    './assets/neuschwanstein-g45cd94d10_1280.jpg',
    './assets/pier-g9ec0d5616_1920.jpg',
    './assets/plane-g86ceaa161_1920.jpg',
    './assets/waterfall-g33364de61_1920.jpg',
    './assets/beach-gdb109c8be_1920.jpg',
    './assets/lake-g45b85d4a1_1280.jpg',
    './assets/neuschwanstein-g45cd94d10_1280.jpg',
    './assets/pier-g9ec0d5616_1920.jpg',
    './assets/plane-g86ceaa161_1920.jpg',
    './assets/waterfall-g33364de61_1920.jpg',
    './assets/beach-gdb109c8be_1920.jpg',
    './assets/lake-g45b85d4a1_1280.jpg',
    './assets/neuschwanstein-g45cd94d10_1280.jpg',
    './assets/pier-g9ec0d5616_1920.jpg',
    './assets/plane-g86ceaa161_1920.jpg',
    './assets/waterfall-g33364de61_1920.jpg',
    './assets/beach-gdb109c8be_1920.jpg',
    './assets/lake-g45b85d4a1_1280.jpg',
    './assets/neuschwanstein-g45cd94d10_1280.jpg',
    './assets/pier-g9ec0d5616_1920.jpg',
    './assets/plane-g86ceaa161_1920.jpg',
    './assets/waterfall-g33364de61_1920.jpg',
    './assets/beach-gdb109c8be_1920.jpg',
    './assets/lake-g45b85d4a1_1280.jpg',
    './assets/neuschwanstein-g45cd94d10_1280.jpg',
    './assets/pier-g9ec0d5616_1920.jpg',
    './assets/plane-g86ceaa161_1920.jpg',
    './assets/waterfall-g33364de61_1920.jpg',
    './assets/beach-gdb109c8be_1920.jpg',
    './assets/lake-g45b85d4a1_1280.jpg',
    './assets/neuschwanstein-g45cd94d10_1280.jpg',
    './assets/pier-g9ec0d5616_1920.jpg',
    './assets/plane-g86ceaa161_1920.jpg',
    './assets/waterfall-g33364de61_1920.jpg',
]

function App() : JSX.Element {
    return (
        <div className='flex flex-col place-content-evenly items-center h-screen bg-blue-100'>
            <MenuBar />
            <PhotoGallery photos={photos} />
            <TransitionModal />
        </div>
    )
}

export default App;

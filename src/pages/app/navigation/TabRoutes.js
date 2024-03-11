import React from 'react'
import AddNote from '../note/AddNote/AddNote'
import FoodStore from '../foodstore/foodstore'
import HomePage from '../homepage/HomePage'

export const InitialRoute= {
    addnote: 'Addnote',
    foofstore: 'Menu',
    homepage: "Home",
}

 export const TabRoutes = [

    {
        name: InitialRoute.homepage,
        component: HomePage
    },
    {
        name: InitialRoute.addnote,
        component: AddNote
    },
    {
        name: InitialRoute.foofstore,
        component: FoodStore
    },

    

]

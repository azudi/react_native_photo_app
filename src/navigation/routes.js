
import stack from "./stack"
import { routeNames } from "./names"
import Landing from "../pages/home/Landing"
import HomePage from "../pages/app/AppBottomTabs"
import SignUp from "../pages/home/SignUp"
import ViewNote from "../pages/app/note/view-note/ViewNote"
import EditNote from "../pages/app/note/Edit-note/EditNote"
import AppDrawerTabs from "../pages/app/drawer/SideMenutabs"

export const routes = [
    {
        name: routeNames.landing,
        stack: stack.LANDING,
        component : Landing
    },
    {
        name: routeNames.signup,
        stack: stack.AUTH,
        component : SignUp
    },


    //  ...Requires Auth
    {
        name: routeNames.homepage,
        stack: stack.AUTH,
        component : HomePage
    },
    {
        name: routeNames.viewnote,
        stack: stack.AUTH,
        component : ViewNote
    },
    {
        name: routeNames.editnote,
        stack: stack.AUTH,
        component : EditNote
    },
    {
        name: routeNames.sections,
        stack: stack.AUTH,
        component : AppDrawerTabs
    },

]
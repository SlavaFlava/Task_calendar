import { makeAutoObservable } from "mobx"
import { orangeTheme, purpleTheme, blueTheme, blackTheme } from "../themes"

class ThemeStore {
    constructor() {
        makeAutoObservable(this)
    }

    activeTheme: any = blueTheme

    setActiveTheme(theme: any) {
        this.activeTheme = theme
    }
}


export default new ThemeStore()   
import { defineStore } from "pinia";

export const useNavigationStore = defineStore("NavigationStore", {
    state: () => ({
        showNav: false
    }),
    actions: {
        toggleNav() {
            if ( this.showNav === false) return this.showNav = true;
            return this.showNav = false;
        }
    }
})
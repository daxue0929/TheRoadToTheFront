import {type App, type Component} from "vue";
import SvgIcon from "@/components/icons/SvgIcon/index.vue";

const allGlobalComponents: Component = {SvgIcon}

export default {
    install(app: App) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key]);
        })
    }
}
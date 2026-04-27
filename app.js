import { createApp, ref, onMounted } from "vue";
import HeaderComponent from "./components/HeaderComponent.js"
import CalendarComponent from "./components/CalendarComponent.js";

const app = {
    setup() {
        return{};
    }
}

const vueApp = createApp(app);

vueApp.component('header-component', HeaderComponent);
vueApp.component('calendar-component', CalendarComponent);

vueApp.mount("#app");
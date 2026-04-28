import { createApp, ref, onMounted } from "vue";
import HeaderComponent from "./components/HeaderComponent.js"
import CalendarComponent from "./components/CalendarComponent.js";

const app = {
    setup() {
        const showMay = ref(false);
        console.log("button not clicked")

        function showMayWeeks() {
            showMay.value = !showMay.value;
            console.log("Button clicked")
        }

        return{showMay, showMayWeeks};
    }
}

const vueApp = createApp(app);

vueApp.component('header-component', HeaderComponent);
vueApp.component('calendar-component', CalendarComponent);

vueApp.mount("#app");
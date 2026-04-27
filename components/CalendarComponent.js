import SortingButtonComponent from "./SortingButtonComponent.js"
import EmployeeComponent from "./EmployeeComponent.js"
import DateComponent from "./DateComponent.js";

export default {

    setup() {
        const weeks = [
            {week: "v.16", period: "13 april - 19 april"},
            {week: "v.17", period: "20 april - 26 april"},
            {week: "v.18", period: "27 april - maj"},
            {week: "v.19", period: "4 maj - 10 maj"},

        ];
        return{ weeks };
    },

    components: {
        'employee-component': EmployeeComponent,
        'sorting-button': SortingButtonComponent,
        'date-component': DateComponent
    },

    template: `
        <div id="main-calendar-container">
            <div class="sorting-and-date-rows">
                <div class="name-availability-profession">
                    <sorting-button></sorting-button>
                    <button class=sort-desc-button>
                        <img src="assets/up_down_arrows.png" alt="sort descending">
                        <span>Namn</span>
                    </button>
                </div>

                <div class="date-row">
                    <date-component v-for="(week, index) in weeks" :key="index" :week="week.week" :period="week.period"></date-component>
                </div>
            </div>
            <employee-component></employee-component>
        </div>
    `
};
import SortingButtonComponent from "./SortingButtonComponent.js"
import EmployeeComponent from "./EmployeeComponent.js"
import DateComponent from "./DateComponent.js";

export default {

    props: ['showMay'],

    setup(props) {
        const weeks = [
            { week: "v.16", period: "13 april - 19 april" },
            { week: "v.17", period: "20 april - 26 april" },
            { week: "v.18", period: "27 april - maj" },
            { week: "v.19", period: "4 maj - 10 maj" },

        ];

        const mayWeeks = [
            { week: "v.20", period: "11 maj - 17 maj" },
            { week: "v.21", period: "18 maj - 24 maj" },
            { week: "v.22", period: "25 maj - 31 maj" },
            { week: "v.23", period: "1 juni - 7 juni" },
        ]

        return { weeks, mayWeeks, props };
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

                <div v-if="!props.showMay">
                    <div class="date-row">
                        <date-component v-for="(week, index) in weeks" :key="index" :week="week.week" :period="week.period"></date-component>
                    </div>
                </div>

                <div v-if="props.showMay">
                    <div class="date-row">
                        <date-component v-for="(week, index) in mayWeeks" :key="index" :week="week.week" :period="week.period"></date-component>
                    </div>
                </div>
            </div>

            <employee-component></employee-component>
        </div>
    `
};
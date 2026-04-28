export default {
    props: {
        week: String,
        period: String,
    },

    template: `
            <div class="main-date-container">
                <div class="week-container">
                    <p class="week-text">{{ week }}</p>
                    <p class="period-text">{{ period }}</p>
                </div>

                <div class="weekday-container">
                    <div class="day">
                        <p>M</p>
                    </div>
                    <div class="day">
                        <p>T</p>
                    </div>
                    <div class="day">
                        <p>O</p>
                    </div>
                    <div class="day">
                        <p>T</p>
                    </div>
                    <div id="day-friday" class="day">
                        <p>F</p>
                    </div>
                    <div class="weekend">
                        <p>L</p>
                    </div>
                    <div class="weekend">
                        <p>S</p>
                    </div>
                </div>
            </div>
    `
}
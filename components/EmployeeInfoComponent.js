export default {
    props: {
        profession: String,
        name: String
    },

    template: `
        <div class="employee-info-container">
            <p class="employee-profession">{{ profession }}</p>
            <p class="employee-name">{{ name }}</p>
        </div>
    `
}
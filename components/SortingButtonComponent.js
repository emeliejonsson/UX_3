export default {
    setup() {
        const sortingOptions = [
            { text: "Namn" },
            { text: "Tillgänglighet" },
            { text: "Yrkeskategori" }
        ];
        return { sortingOptions };
    },

    template:
        `<div class="sorting-options-container">
            <button class="sorting-button" v-for="(option, index) in sortingOptions" :key="index">
            {{ option.text }}
            </button>
        </div>
        `
}
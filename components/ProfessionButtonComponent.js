export default {
    props: {
        text: String,
        img: String
    },

    template: `
    <div class="profession-sorting-buttons"> 
        <button class="profession-button">
            <p>{{ text }}</p>
            <img :src="img"/>
        </button>
    </div>
    `
};
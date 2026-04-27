import ProfessionButtonComponent from "./ProfessionButtonComponent.js";

export default {
    props: {
        date: String,
        title: String,
        logo: String,
        divider: String,
    },

    components: {
        'profession-button': ProfessionButtonComponent
    },

    setup() {
        const professions = [
            { text: "Rörmokare", img: "assets/plumber_icon.png" },
            { text: "Målare", img: "assets/painter_icon.png" },
            { text: "Elektriker", img: "assets/electrician_icon.png" },
            { text: "Snickare", img: "assets/carpenter_icon.png" },
            { text: "Murare", img: "assets/mason_icon.png" }
        ];

        return { professions };
    },

    template: `
    <nav class="navigation">

        <div class="navigation-left">
            <img :src="logo" id="logo-img"/>
            <p>{{ date }}</p>
            <p>{{ title }}</p>
            <button class="new-booking-button">+</button>
        </div>

        <div class="navigation-divider">
            <img :src="divider" id="navigation-divider"/>
        </div>
        
        <div class="navigation-right">
           <profession-button v-for="(profession, index) in professions" :key="index" :text="profession.text" :img="profession.img">
           </profession-button>
        </div>
    </nav>
    `
};
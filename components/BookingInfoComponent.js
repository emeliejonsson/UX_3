import BookingService from "../services/BookingService.js";

export default {
    props: { statusIds: {
        type: Array,
        default: () => []
    } 
},

    setup(props) {

        const bookingStatus = [
            { src: "assets/_50.png", id: "50per" },
            { src: "assets/_prel-50.png", id: "prel-50per" },
            { src: "assets/_prel-50-50.png", id: "prel-50-50per" },
            { src: "assets/_100.png", id: "100per" },
            { src: "assets/_prel-100.png", id: "prel100per" },
            { src: "assets/_available.png", id: "available" },
            { src: "assets/_absent.png", id: "absent" }
        ];
        const visibleStatus = props.statusIds.map(id => 
            bookingStatus.find(item => item.id === id)
        ).filter(Boolean);
    return { visibleStatus };
    },

    template: `
    <div class="booking-info-container">
        <div class="one-booking-container" v-for="item in visibleStatus">
            <img :key="item.id" :src="item.src"/>
        </div>
    </div>
    `
}
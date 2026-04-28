const BookingService = {
    async getEmployees() {
        try {
            const response = await fetch("https://yrgo-web-services.netlify.app/bookings");

            if (!response.ok) {
                throw new Error(`Status: ${response.status}`);
            }

            const data = await response.json();
            return data; 

            console.log(data);

        } catch (e) {
            error.value = e.message;
            console.error("Get error: ", e);
        };
    },
};

// This makes BookingService object immutable
Object.freeze(BookingService);

export default BookingService;
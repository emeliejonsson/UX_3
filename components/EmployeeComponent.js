import EmployeeInfoComponent from "./EmployeeInfoComponent.js";
import BookingInfoComponent from "./BookingInfoComponent.js";

export default {
    components: {
        'employee-info-component': EmployeeInfoComponent,
        'booking-info-component': BookingInfoComponent
    },

    setup() {
        const employees = [
            { profession: "Må", name: "Aisha Abdi", statusIds: ["50per", "available", "absent", "100per", "prel-50per"] },
            { profession: "E", name: "Alejandro Rodrigues", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "Mu", name: "Alexander Nyström", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "E", name: "Anna Larsson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "R", name: "Charlotte Dupont", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Daniel Eriksson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "R", name: "Elin Andersson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Elena Popescu", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "R", name: "Emma Holm", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "R", name: "Erik Johansson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "Mu", name: "Fatima El-Masri", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Frida Öhman", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Aisha Abdi", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "E", name: "Takahiro Tanaka", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "Må", name: "Giovanni Ricci", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "E", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "Mu", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "R", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "E", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "R", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "Må", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "Mu", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "E", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "R", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "S", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
            { profession: "Må", name: "Example Examplesson", statusIds: ["100per", "prel-50per", "available", "absent", "50per"] },
        ];

        return { employees };
    },

    template: `
        <div class="employee-table">

            <div v-for="(employee, index) in employees" :key="index" class="employee-row">

                <div class="employee-info-container">
                    <employee-info-component :profession="employee.profession" :name="employee.name"/>
                </div>
            
                <div class="all-status-boxes">
                    <div class="status-box">
                        <booking-info-component :status-ids="employee.statusIds"></booking-info-component>
                        <div class="status-box-weekend">
                        </div>
                        <div class="status-box-weekend">
                        </div>
                    </div>
                    <div class="status-box">
                        <booking-info-component :status-ids="employee.statusIds"></booking-info-component>
                        <div class="status-box-weekend">
                        </div>
                        <div class="status-box-weekend">
                        </div>
                    </div>
                    <div class="status-box">
                        <booking-info-component :status-ids="employee.statusIds"></booking-info-component>
                        <div class="status-box-weekend">
                        </div>
                        <div class="status-box-weekend">
                        </div>
                    </div>
                    <div class="status-box">
                        <booking-info-component :status-ids="employee.statusIds"></booking-info-component>
                        <div class="status-box-weekend">
                        </div>
                        <div class="status-box-weekend">
                        </div>
                    </div>
                </div>
           </div>
        </div>
    `
};
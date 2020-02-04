<template>
    <div class="appointment-info">
        {{appointmentInfo}}
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    name: 'AppointmentPage',
    methods: {
        ...mapActions("appointment", ["getAppointment"]),
    },
    computed: {
        ...mapState("appointment", ["appointmentInfo"])
    },
    created() {
        this.getAppointment(this.$route.params.id)
    },
    watch: {
        // '$route.params.id': function () {
        //    this.getPatient(this.$route.params.id)
        // }
    }
};
</script>
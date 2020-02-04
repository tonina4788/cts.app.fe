<template>
   <table class="custom-event-editor" width="100%" cellpadding="5">
        <tbody>
            <tr>
                <td class="e-textlabel">Appointment title</td>
                <td colspan="4">
                    <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" required=""/>
                </td>
            </tr>
            <tr>
            <td class="e-textlabel">From</td>
                <td colspan="4">
                    <input id="StartTime" class="e-start e-field" type="text" name="StartTime" />
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">To</td>
                <td colspan="4">
                    <input id="EndTime" class="e-end e-field" type="text" name="EndTime" />
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Appointment type</td>
                <td colspan="4">
                    <input type="text" id="AppointmentCategory" name="AppointmentCategory" class="e-field" style="width: 100%" />
                </td>
            </tr>
            <tr v-if="!addNewPatient">
                <td class="e-textlabel">Patient</td>
                <td colspan="4">
                    <input type="text" id="PatientData" name="PatientData" class="e-field" style="width: 100%" />
                </td>
            </tr>
            <tr v-if="!addNewPatient">
                <button class="primary-btn" type="submit" @click="addNewPatient = true">or Add patient</button>
            </tr>
            <tr v-if="addNewPatient">
                <td class="e-textlabel">Patient name</td>
                <td colspan="4">
                    <input id="Name" class="e-field e-input" type="text" value="" name="Name" style="width: 100%" />
                </td>
            </tr> <tr v-if="addNewPatient">
            <td class="e-textlabel">Patient Surname</td>
                <td colspan="4">
                    <input id="Surname" class="e-field e-input" type="text" value="" name="Surname" style="width: 100%" />
                </td>
            </tr>
             <tr v-if="addNewPatient">
                <td class="e-textlabel">Patient AMKA</td>
                <td colspan="4">
                    <input id="Amka" class="e-field e-input" type="text" value="" name="Amka" style="width: 100%" />
                </td>
            </tr>
             <tr v-if="addNewPatient">
                <td class="e-textlabel">Patient Phone</td>
                <td colspan="4">
                    <input id="Phone" class="e-field e-input" type="text" value="" name="Phone" style="width: 100%" />
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Description</td>
                <td colspan="4">
                    <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'editorTemplate',
    data() {
        return {
            addNewPatient: false
        }
    }
};
</script>
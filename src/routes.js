import Login from '@/views/LoginPage';
import PatientsList from '@/views/PatientsListPage';
import PatientPage from '@/views/PatientPage';
import Calendar from '@/views/CalendarPage';
import Dashboard from '@/views/DashboardPage';
import Settings from '@/views/SettingsPage';
import Appointment from '@/views/AppointmentPage';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/patients',
        name: 'Patients',
        component: PatientsList,
    }, 
    {
        path: '/patients/:id',
        name: 'PatientPage',
        component: PatientPage
    },   
    {
        path: '/appointment/:id',
        name: 'AppointmentPage',
        component: Appointment
    },    
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }
];

export default routes;

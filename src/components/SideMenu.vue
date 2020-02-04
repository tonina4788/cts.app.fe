<template>
    <div class="side-menu">
        <!-- <router-link to="/"> -->
            <!-- <SvgIcon
            :as-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/Lock.svg`)"
            class=""
            ></SvgIcon> --> 
            <!-- TODOs -->
            <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/Notifiation.svg`)"
                class="side-menu__icon"
            ></i>
        <!-- </router-link> -->
        <router-link to="/calendar">
            <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/Calendar.svg`)"
                class="side-menu__icon"
            ></i>
        </router-link>
        <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/Search.svg`)"
            class="side-menu__icon"
            @click="$emit('search-clicked')"
        ></i>
        <router-link to="/settings">
            <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/Settings.svg`)"
                class="side-menu__icon"
            ></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SideMenu'
};
</script>
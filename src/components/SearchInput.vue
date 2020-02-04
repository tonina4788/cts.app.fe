<template>
    <input
        type="text"
        name="search"
        ref="search"
        @input="$emit('search-input', $event.target.value)"
        placeholder="Search patient..."
        class="input-form"
    />
</template>

<script>
export default {
    name: 'SearchInput'
};
</script>
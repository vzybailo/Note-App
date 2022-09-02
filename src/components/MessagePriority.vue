<template>
    <div class="priority-msg">
            {{ messagePriority }}
    </div>
</template>

<script>
    export default {
        props: {
           messagePriority: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .priority-msg {
        text-align: center;
        padding: 20px;
        color: red;
    }
</style>
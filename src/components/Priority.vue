<template>
    <div class="priority-msg">
            {{ priority }}
    </div>
</template>

<script>
    export default {
        props: {
           priority: {
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
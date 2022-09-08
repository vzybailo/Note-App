<template>
    <div class="message-error">
        <div class="message">
            <p>{{message}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    .message p {
        text-align: center;
        padding: 20px;
        color: red;
    }
</style>
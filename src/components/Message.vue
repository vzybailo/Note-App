<template>
    <div class="message-error">
        <div  class="message">
            <p>{{message}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                required: true
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
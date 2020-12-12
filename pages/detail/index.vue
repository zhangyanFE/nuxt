<template>
    <div>{{$route.query.id}}</div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route.query)
    }
}
</script>
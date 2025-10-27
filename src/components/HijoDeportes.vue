<template>
    <div>
        <h1>Hijo deportes</h1>
        <h4 style="color:blue">{{nombredeporte}}</h4>
    </div>
</template>

<script>
export default {
    name:"HijoDeportes",
    props: ["nombredeporte"]
    , mounted(){
        console.log(this.nombredeporte)
    }
}
</script>

<style>
</style>
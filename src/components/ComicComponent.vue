<template>
    <div>
        <h1>{{comic.titulo}}</h1>
        <button @click="seleccionarFavorito">
            Seleccionar Favotito
        </button>
        <button @click="deleteComic">
            Eliminar Comic 
        </button>
        <p>{{ comic.descripcion }}</p>
        <img :src="comic.imagen" :alt="comic.titulo" />
        <h4 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year >=2000
        }">Año de publicación: {{ comic.year }}</h4>

    </div>
    
</template>
<script>
export default {
    name: "ComicComponent",
    props: ["comic", "index"],
    methods: {
        seleccionarFavorito() {
            console.log(`Has seleccionado como favorito a ${this.comic.titulo}`);
            this.$emit('favorito-seleccionado', this.comic);
        }
    }, deleteComic() {
        this.$emit('deleteComic', this.index);
    }
};

</script>
<style >
@import './../assets/css/comic.css'
</style>
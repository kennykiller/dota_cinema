<script setup lang="ts">
interface Props {
    url: string,
    types: string[],
    name: string,
}
const props = defineProps<Props>();
const filmTypes = props.types.join(',');
</script>

<template>
    <div class="flex flex-col justify-center items-start first:ml-0 mx-2 last:mr-0 w-56">
        <div class="special-box-shadow h-80 w-52 mb-2">
            <img :src="require(`@/assets/posters/${props.url}`)" alt="" class="block w-full h-full"/>  
        </div>
        <div class="text-center w-full">
            <h2>{{ props.name }}</h2>
            <p class="break-all">{{ filmTypes }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.special-box-shadow {
    box-shadow: 0 10px 15px -3px rgba(13, 49, 150, 0.8), 0 4px 6px -4px rgba(0, 0, 0, 0.8);;
}
</style>
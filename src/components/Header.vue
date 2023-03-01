
import { title } from 'process';

<template>
    <h1>{{ title }}</h1>
</template>

<script>
    export default {
        data(){
            return{
                title:'New HerLine site',
            }
        }
    }
</script>

<style>
    h1{
        font-size: 2rem;
    }
</style>
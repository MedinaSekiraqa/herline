
import { title } from 'process';

<template>
    <header class="head">
        <h1 class="head__title">{{ title }}</h1>
    <img class="head__logo" alt="Vue logo" src="../assets/logo.png"/>
    <ul class="nav-list">
        <li v-for="item in menuItems"
            v-bind:key="item.path">
           
            <router-link v-bind:to="item.path">{{ item.name }}</router-link>
        </li>
    </ul>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                title:'New HerLine site',
                menuItems:[
                  { path: '/',name:'Home'},
                  { path: '/product',name:'Product'},
                  { path: '/about',name:'About'},
                  { path: '/contact',name:'Contact'},
                  { path: '/register',name:'Register'},
                  { path: '/login',name:'Login'},
                ],
            }
        }
    }
</script>

<style>
    .head{
        display: flex;
        background-color: aliceblue;
        align-items: flex-end;
        gap: 3rem;
        padding: 3rem;

    }
    .head__title{
        font-size: 2rem;
    }
    .head__logo{
        max-width: 100px;
        margin-left: 1rem;
    }
    .nav-list{
        list-style-type: none;
        display: flex;
        gap: 3rem;
        
    }
</style>
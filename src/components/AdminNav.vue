<template>
    <nav id="nav">
        <ul class="nav-ul">
            <li class="nav-li">
                <router-link :to="{ name:'dashboard' }">Dashboard</router-link>
            </li>
            <li class="nav-li">
                <router-link :to="{ name:'products' }">Produits</router-link>
            </li>
            <li class="nav-li">
                <router-link :to="{ name:'orders' }">Commande</router-link>
            </li>
            <li class="nav-li">
                <router-link :to="{ name:'customers' }">Clients</router-link>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    #nav {
        width: 15%;
        .nav-ul {
            height: 100vh;
            width: 15%;
            position: fixed;
            background-color: #171628;
            left: 0;
            top: 0;
            margin: 0;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .nav-li {
                width: 100%;
                text-align: center;
                > a {
                    display: block;
                    padding: 25px 0;
                    color: white;
                    font-weight: bold;
                }
                &:hover {
                    background-color: white;
                    > a {
                        color: #171628;
                    }
                }
            }
        }
    }
</style>
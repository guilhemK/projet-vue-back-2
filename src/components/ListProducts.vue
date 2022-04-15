<template>
    <div id="list-products">
        <h1 class="main-title">Skins de champions</h1>
        <div class="container-add">
            <router-link :to="{ name:'addProduct' }"><button type="button" class="action-button short bg-blue">Ajouter</button></router-link>
        </div>
        <table v-for="(champion) in champions" :key="champion.id" class="champion-table">
            <thead>
                <tr colspan="4" ><th class="champion-name">{{ champion.name }}</th></tr>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(skin) in champion.skins" :key="skin.id" class="skin-tr">
                    <td>{{ skin.id }}</td>
                    <td>{{ skin.name }}</td>
                    <td>{{ skin.price }}</td>
                    <td>
                        <router-link :to="{ name: 'editProduct', params: { productId: skin.id }}"><button type="button" class="action-button short">Modifier</button></router-link>
                        <br/>
                        <button type="button" class="action-button">Supprimer</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default({
    name:'ListProducts',
    computed: {
        ...mapState(["champions"]),
    },

})
</script>
<style lang="scss" scoped>
    .main-title {
        text-align: center;
    }
    .container-add {
        background-color: #171628;
        margin: 15px 0;
        padding:20px;
        text-align:right;
    }
    .champion-table {
        border-collapse:collapse;
        background-color: #171628;
        border: none;
        border-radius: 5px;
        color: white;
        text-align: center;
        .champion-name {
            font-size: 25px;
            font-weight: bold;
            padding: 30px 0;
        }
        > thead > tr > th {
            padding: 15px 50px;
        }
        .skin-tr {
            &:nth-child(odd) {
                background-color: #3a3864;
            }
            &:hover {
                background-color: #dfdfdf;
                color: #171628;
            }
            > td {
                text-align: center;
                padding: 15px 30px;
            }
        }
        
    }
</style>
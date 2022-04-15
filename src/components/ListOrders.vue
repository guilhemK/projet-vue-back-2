<template>
    <div id="list-orders">
        <h1>Commandes :</h1>
        <table class="order-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>client</th>
                    <th>Produits</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order) in orders" :key="order.id" class="product-tr">
                    <td>{{ order.id }}</td>
                    <td>{{ order.name }}</td>
                    <td>{{ order.customer[0].name }}</td>
                    <td><p v-for="(product) in order.products" :key="product.id">{{ product.name }}</p></td>
                    <td><button type="button" class="action-button">Supprimer</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default({
    name:'ListOrders',
    computed: {
        ...mapState(["orders"]),
    },

})
</script>
<style lang="scss" scoped>
    .order-table {
        border-collapse:collapse;
        background-color: #171628;
        border: none;
        border-radius: 5px;
        color: white;
        text-align: center;
        .order-name {
            font-size: 25px;
            font-weight: bold;
            padding: 30px 0;
        }
        > thead > tr > th {
            padding: 15px 50px;
        }
        .product-tr {
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
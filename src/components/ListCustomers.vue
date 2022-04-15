<template>
    <div id="list-customers">
        <h1>Clients :</h1>
        <table class="customer-table">
            <thead>
                <tr><th></th><th></th><th></th><th></th><th></th><th><router-link :to="{ name:'addCustomer' }"><button type="button" class="action-button short">Ajouter</button></router-link></th></tr>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Adresse</th>
                    <th>Téléphone</th>
                    <th>Mail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer) in customers" :key="customer.id" class="customer-tr">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.firstName }} {{ customer.lastName }}</td>
                    <td>{{ customer.adress }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.mail }}</td>
                    <td>
                        <router-link :to="{ name: 'editCustomer', params: { customerId: customer.id }}"><button type="button" class="action-button short">Modifier</button></router-link>
                        <br/>
                        <button type="button" class="action-button">Supprimer</button>
                        </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default({
    name:'ListCustomers',
    computed: {
        ...mapState(["customers"]),
    },

})
</script>
<style lang="scss" scoped>
    .customer-table {
        border-collapse:collapse;
        background-color: #171628;
        border: none;
        border-radius: 5px;
        color: white;
        text-align: center;
        > thead > tr > th {
            padding: 15px 50px;
        }
        .customer-tr {
            &:nth-child(odd) {
                background-color: #3a3864;
            }
            &:hover {
                background-color: grey;
                color: #171628;
            }
            > td {
                text-align: center;
                padding: 15px 30px;
            }
        }
    }
</style>
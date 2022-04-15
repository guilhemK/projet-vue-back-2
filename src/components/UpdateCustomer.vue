<template>
    <div id="new-customer">
        <h1>Modifier un client</h1>
        <form class="add-customer-form">
            <div class="row">
                <div class="half-row"><label for="last-name">Nom :</label><br/><input type="text" name="last-name" id="last-name"></div>
                <div class="half-row"><label for="first-name">Prénom :</label><br/><input type="text" name="first-name" id="first-name"></div>
            </div>
            <div class="row">
                <div class="half-row"><label for="adress">Adresse :</label><br/><input type="text" name="adress" id="adress"></div>
            </div>
            <div class="row">
                <div class="half-row"><label for="phone">Téléphone :</label><br/><input type="text" name="phone" id="phone"></div>
                <div class="half-row"><label for="mail">Mail :</label><br/><input type="text" name="mail" id="mail"></div>
            </div>

            <div class="row">
                <div class="half-row">
                    <button type="submit" class="submit-button">Enregistrer</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
    #new-customer {
        .add-customer-form {
            background-color: #dfdfdf;
            padding: 15px;
            .row {
                display: flex;
                padding: 15px;
                .half-row {
                    width: 50%;
                    padding: 15px;
                    .submit-button {
                        background-color: #171628;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        color: white;
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>
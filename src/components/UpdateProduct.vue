<template>
    <div id="new-product">
        <h1>Modifier un Skin</h1>
        <form class="add-product-form">
            <div class="row">
                <div class="half-row"><label for="name">Nom du skin :</label><br/><input type="text" name="name" id="name" ></div>
                <!-- v-model="skin.name" -->
                <div class="half-row"><label for="champion">Nom du Champion :</label><br/><input type="text" name="champion" id="champion"></div>
            </div>
            <div class="row">
                <div class="half-row"><label for="price">Prix :</label><br/><input type="number" name="price" id="price"><span class="addon">€</span></div>
                <div class="half-row"><label for="price">Image de présentation :</label><br/><input type="text" name="skin" id="skin"></div>
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
    #new-product {
        .add-product-form {
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
                    .addon {
                        background-color: #171628;
                        padding: 2px 5px;
                        border: 1px solid #8f8f9d;
                        color: white;
                        font-weight: bold;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                    }
                }
            }
        }
    }
</style>
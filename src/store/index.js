import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // authentification: false,
    champions:
    [
      {
        "id":1,
        "name":"Aatrox",
        "skins":[
            {
                "id": 1,
                "name": "Aatrox lune de sang Edition Prestige",
                "price": 20,
                "img":"Aatrox_lune_de_sang_prestige.jpg"
            },
            {
                "id": 2,
                "name": "Aatrox lune de sang",
                "price": 10,
                "img":"Aatrox_lune_de_sang.jpg"
            },
            {
                "id": 3,
                "name": "Aatrox mecha",
                "price": 5,
                "img":"Aatrox_mecha.jpg"
            },
            {
                "id": 4,
                "name": "Aatrox héros de guerre",
                "price": 7,
                "img":"aatrox_heros_de_guerre.jpg"
            },
            {
                "id": 5,
                "name": "Aatrox chasseur marin",
                "price": 7,
                "img":"Aatrox_pecheur.jpg"
            },
            {
                "id": 6,
                "name": "Aatrox justicier",
                "price": 15,
                "img":"Aatrox_justicier.jpg"
            }
        ]
      }
    ],
    customers:
    [
      {
        "id":1,
        "firstName":"guilhem",
        "lastName":"kieny",
        "adress":"69 rue du mont",
        "phone": 945674567,
        "mail":"guilhem@gmail.com"
      },
      {
        "id":2,
        "firstName":"thibault",
        "lastName":"alheure",
        "adress":"68 rue du mont",
        "phone":945674557,
        "mail":"thibault@gmail.com"
      },
      {
        "id":3,
        "firstName":"sabrina",
        "lastName":"lautre",
        "adress":"34 rue du mont",
        "phone":947674567,
        "mail":"sabrina@gmail.com"
      }
    ],
    orders:
    [
      {
        "id":1,
        "name":"commande1",
        "customer":[
          {
            "id":3,
            "name":"sabrina lautre",
            "adress":"34 rue du mont",
            "phone":947674567,
            "mail":"sabrina@gmail.com"
          }
        ],
        "products":[
          {
            "id": 1,
            "name": "Aatrox lune de sang Edition Prestige",
            "instantPrice": 20
          },
          {
            "id": 3,
            "name": "Aatrox mecha",
            "instantPrice": 5
          },
          {
            "id": 6,
            "name": "Aatrox justicier",
            "instantPrice": 15,
          }
        ]
      },
      {
        "id":2,
        "name":"commande2",
        "customer":[
          {
            "id":2,
            "name":"thibault alheure",
            "adress":"68 rue du mont",
            "phone":945674557,
            "mail":"thibault@gmail.com"
          }
        ],
        "products":[
          {
            "id": 1,
            "name": "Aatrox lune de sang Edition Prestige",
            "instantPrice": 20
          },
          {
            "id": 3,
            "name": "Aatrox mecha",
            "instantPrice": 5
          },
        ]
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

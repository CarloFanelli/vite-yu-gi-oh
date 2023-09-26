import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: null,
    info: null,

    fetchData() {
        axios(this.base_url)
            .then(response => {
                console.log(response.data);
                console.log(response.data.data[0]);
                for (let i = 0; i < response.data.data.length; i++) {

                    console.log(response.data.data[i]);
                    this.cards = response.data.data;
                }
            })
    }
})
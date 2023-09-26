import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    cards: null,
    info: null,

    fetchData() {
        axios(this.base_url)
            .then(response => {
                console.log(response.data);

                this.cards = response.data.data;

            })
    }
})
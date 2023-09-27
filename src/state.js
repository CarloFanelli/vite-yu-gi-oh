import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    selection: '',
    base_url: '',
    cards: null,
    arch_url: '',
    searchArch: '',

    fetchData() {

        this.base_url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=1000&offset=0`,
            //console.log(this.base_url);
            //console.log(this.selection);


            axios(this.base_url)
                .then(response => {
                    // console.log(response.data);
                    //console.log('selezione', this.selection);
                    this.cards = response.data.data;

                })
                .catch(error => (
                    console.log('errore ', error)
                ));
    },

    fetchArch() {
        this.arch_url = 'https://db.ygoprodeck.com/api/v7/archetypes.php';
        console.log(this.arch_url);
    }
})
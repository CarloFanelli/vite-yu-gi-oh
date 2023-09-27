import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    selection: '',
    base_url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0`,
    cards: null,
    arch_url: '',
    searchArch: '',
    archetypes: null,

    fetchData(url) {

        //console.log(this.base_url);
        //console.log(this.selection);


        axios(this.base_url)
            .then(response => {
                //console.log(response.data);
                //console.log('selezione', this.selection);
                this.cards = response.data.data;

            })
            .catch(error => (
                console.log('errore ', error)
            ));
    },

    fetchArch() {
        this.arch_url = 'https://db.ygoprodeck.com/api/v7/archetypes.php';
        axios(this.arch_url)
            .then(response => {
                this.archetypes = response.data
                //console.log(this.archetypes);
            })
            .catch(error => {
                console.log('errore : ', error);
            })
    }
})
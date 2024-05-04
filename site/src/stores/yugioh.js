import {writable} from "svelte/store";

export const cards = writable([]);

const fetchYugioh = async () => {
    const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
    const res = await fetch (url);
    const cardData = await res.json();
    //console.log(cardData);
    const loadedCards = cardData.data.map((data) => {
        var status;
        if (typeof data.banlist_info == 'undefined'){
            status = "Unlimited"
        }else{
            if(typeof data.banlist_info.ban_tcg == 'undefined'){
                status = "Unlimited"
            }else{
                status = data.banlist_info.ban_tcg
            }
        }
        //console.log(status);
        return {
            name: data.name,
            type: data.type,
            image: data.card_images[0].image_url_cropped,
            status: status
        };
    });
    cards.set(loadedCards);
};

fetchYugioh();
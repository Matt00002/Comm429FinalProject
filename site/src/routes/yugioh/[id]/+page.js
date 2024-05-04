export async function load({fetch, params}) {
    const name = params.id;
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&name=${name}`;
    const res = await fetch(url);
    const card = await res.json();

    const loadedCard = card.data.map((data) => {
        //console.log(data.type)
        return {
            name: data.name,
            type: data.type,
            image: data.card_images[0].image_url_cropped,
            effect: data.desc
        };
    });

    console.log(card);
    console.log(loadedCard);

    return {loadedCard};
}
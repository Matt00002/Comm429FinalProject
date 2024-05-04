<script>
    export let data;
    console.log(data.loadedCard[0]);
</script>

<div class="flex flex-col items-center">

    <h1 class="text-4xl text-center my-8 uppercase">{data.loadedCard[0].name}</h1>
    <img class="w-40 h-40 card-image" src={data.loadedCard[0].image} alt="${data.loadedCard[0].name}">
    <p>{data.loadedCard[0].type}</p>
    <p>{data.loadedCard[0].effect}</p>

</div>
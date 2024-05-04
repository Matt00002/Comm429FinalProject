<script>
    export let card;
    import { fade } from 'svelte/transition';
</script>

<a class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/yugioh/${card.name}`} transition:fade>
    <img class="h-40 w-40 rounded-md" src={card.image} alt={card.name}>
    <h2 class="uppercase text-2xl">{card.name} | {card.type}</h2>
</a>
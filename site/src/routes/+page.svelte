<script>
    import YugiohCard from "../components/yugiohCard.svelte";
    import {cards} from "../stores/yugioh"
    import Sidebar from "../components/sidebar.svelte";

    //console.log($cards)

    let searchTerm = "";
    let filteredCards = $cards;
    let filteredCardsSearch = [];

    $: {
        if(searchTerm){
            filteredCardsSearch = filteredCards.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }else{
            filteredCardsSearch = [...filteredCards]
        }
    }

    function changeToMonster(){
        filteredCards = $cards.filter(card => card.type.toLowerCase().includes("monster"))
    }

    function changeToSpell(){
        filteredCards = $cards.filter(card => card.type.toLowerCase().includes("spell"))
    }

    function changeToTrap(){
        filteredCards = $cards.filter(card => card.type.toLowerCase().includes("trap"))
    }

    function changeToForbidden(){
        filteredCards = $cards.filter(card => card.status.toLowerCase().includes("banned"))
    }

    function changeToLimited(){
        filteredCards = $cards.filter(card => card.status.toLowerCase().slice(0, 7).includes("limited"))
    }

    function changeToSemi(){
        filteredCards = $cards.filter(card => card.status.toLowerCase().includes("semi-limited"))
    }

    function changeToUnlimited(){
        filteredCards = $cards.filter(card => card.status.toLowerCase().includes("unlimited"))
    }

    function changeToUnfiltered(){
        filteredCards = $cards
    }
</script>

<svelte:head>
    <title>Svelte site</title>
</svelte:head>

<div>
    <Sidebar changeToMonster={() => changeToMonster()} changeToSpell={() => changeToSpell()} changeToTrap={() => changeToTrap()} changeToForbidden={() => changeToForbidden()} changeToLimited={() => changeToLimited()} changeToSemi={() => changeToSemi()} changeToUnlimited={() => changeToUnlimited()} changeToUnfiltered={() => changeToUnfiltered()} />
</div>

<div class="max-w-6xl mx-auto">

<h1 class="text-4xl text-center my-8 uppercase">Welcome to My Site</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Seach for a Card">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredCardsSearch.slice(0, 20) as card}
        <YugiohCard card={card} />
    {/each}
</div>

</div>
<style>

</style>
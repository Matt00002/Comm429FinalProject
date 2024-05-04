<script>
    export let changeToMonster = null;
    export let changeToSpell = null;
    export let changeToTrap = null;

    export let changeToForbidden = null;
    export let changeToLimited = null;
    export let changeToSemi = null;
    export let changeToUnlimited = null;
    export let changeToUnfiltered = null;
</script>

<div class="fixed z-50 top-12 left-8 w-full">
<aside class="absolute w-auto h-screen bg-gray-200 text-black border-r-2 shadow-lg" style="">
    <nav class="py-8 px-4 text-lg ">
        <div class="pb-10">
            <div class="mb-2 px-4 text-2xl">
                Card Type
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 ">
                <button class="block" on:click={changeToMonster()}>Monster</button>
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 ">
                <button class="block" on:click={changeToSpell()}>Spell</button>
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 ">
                <button class="block" on:click={changeToTrap()}>Trap</button>
            </div>
            <div class="mb-2 px-4 text-2xl">
                Status on Banlist
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 ">
                <button class="block" on:click={changeToForbidden()}>Forbidden</button>
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 ">
                <button class="block" on:click={changeToLimited()}>Limited</button>
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 ">
                <button class="block" on:click={changeToSemi()}>Semi-Limited</button>
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 ">
                <button class="block" on:click={changeToUnlimited()}>Unlimited</button>
            </div>
            <div class="mb-2 px-4 hover:text-gray-500 text-2xl ">
                <button class="block" on:click={changeToUnfiltered()}>Clear All Filters</button>
            </div>
        </div>
    </nav>
</aside>
</div>
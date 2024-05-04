<script>
    import Nav from "../components/nav.svelte";
    //import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
</script>
<div class="p-8">
<div class="fixed z-50 top-0 left-0 w-full">
    <Nav />
</div>
<slot></slot>
</div>

<Footer />

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
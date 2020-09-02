<script>
    import {Router, Route, Link} from 'svelte-routing';
    import products from './products.json';

    import Header from './Header.svelte';
    import Footer from './Footer.svelte';

    // Main Content Components
    import Products from './Products.svelte';
    import About from './About.svelte';
    import Contact from './Contact.svelte';
    import Testimonials from './Testimonials.svelte';
    import Details from './Details.svelte';

    export let url = "";
</script>

<Router url="{url}">
    <Header />
    
    <Route path="/" component="{Products}" />
    <Route path="contact" component="{Contact}" />
    <Route path="about" component="{About}" />
    <Route path="testimonials" component="{Testimonials}" />

    <!--Product Routes-->
    {#each products as product, index}
        <Route path="{product.name}">
            <Details index={index} />
        </Route>
    {/each}
    <Footer />
</Router>

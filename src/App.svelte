<script>
    import {Router, Route, Link} from 'svelte-routing';

    import Header from './Header.svelte';
    import Footer from './Footer.svelte';

    // Main Content Components
    import Products from './Products.svelte';
    import About from './About.svelte';
    import Contact from './Contact.svelte';
    import Testimonials from './Testimonials.svelte';

    export let url = "";
</script>

<Header />

<Router url="{url}">
    <Route path="/" component="{Products}" />
    <Route path="contact" component="{Contact}" />
    <Route path="about" component="{About}" />
    <Route path="testimonials" component="{Testimonials}" />
</Router>

<Footer />
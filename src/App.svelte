<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';

    // Main Content Components
    import Products from './Products.svelte';
    import About from './About.svelte';
    import Contact from './Contact.svelte';
    import Testimonials from './Testimonials.svelte';

    let about_visible = false;
    let contact_visible = false;
    let testimonials_visible = false;

    function openView(event) {
        console.log(`Event: ${event.detail.view}`)

        about_visible = false;
        contact_visible = false;
        testimonials_visible = false;

        switch(event.detail.view) {
            case 'About':
                about_visible = true;
                break;
            case 'Contact':
                contact_visible = true;
                break;
            case 'Testimonials':
                testimonials_visible = true;
                break;
        }
    }
</script>

<Header />
{#if about_visible}
    <About />
{:else if contact_visible}
    <Contact />
{:else if testimonials_visible}
    <Testimonials />
{:else}
    <Products />
{/if}
<Footer on:openView={openView} on:/>
<script>
    import products from './products.json';

    // Details View //
    let details_open = false;
    let details_index = null;

    function openDetails(product) {
        details_open = true;
        details_index = product;
    }

    function closeDetails() {
        details_open = false;
        details_index = null;
    }
</script>

<style lang="scss">
    #details {
        width: 70%;
        margin: auto;
    }

    #grid {
        width: 60%;
        margin: 25px auto;

        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        grid-gap: 5px;

        img {
            width: 100%;
            height: auto;

            transition: transform .2s 0s ease-in-out;

            &:hover {
                transform: scale(1.1, 1.1);
                cursor: pointer;
            }
        }
    }
</style>

{#if details_open}
    <div id="details">
        <img src={products[details_index].image} alt={`${products[details_index].name} Cover`}>
        <div id="summary">
            {products[details_index].summary}
        </div>
    </div>
{:else}
    <div id="grid">
        {#each products as product, index}
            <img src={product.image} alt={`${product.name} Cover`} on:click={() => openDetails(index)}>
        {/each}
    </div>
{/if}

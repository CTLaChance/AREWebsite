<script>
    import products from './products.json';

    // Details View //
    let details_open = true;
    let details_index = 0;

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
        width: 60%;
        margin: auto;
        
        display: flex;
        align-items: center;

        font-family: 'Roboto';

        img {
            width: 35%;
            margin-right: 25px;
        }

        #details-text {
            flex-grow: 1;

            display: flex;
            flex-direction: column;

            h2 {
                font-size: 30px;
                margin: 0;
            }

            i {
                margin: 16px 0px;
            }

            #details-buttons {
                button {
                    color: black;
                    background: white;
                    border: 2px black solid;
                    border-radius: 25px;
                    
                    padding: 10px 25px;
                    margin: 0 10px 0 0;

                    transition: all .05s 0s linear;

                    &:hover {
                        cursor: pointer;
                        color: white;
                        background: black;
                    }
                }
            }
        }
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
        <img id="details-cover" src={products[details_index].image} alt={`${products[details_index].name} Cover`}>
        <div id="details-text">
            <h2>{products[details_index].name}</h2>
            <p>{products[details_index].summary}</p>
            <div id="details-buttons">
                <button>Buy</button>
                <button>Sample</button>
            </div>
            <i>Note: For large orders we recommend creating a purchase order by contacting us.</i>
        </div>
    </div>
{:else}
    <div id="grid">
        {#each products as product, index}
            <img src={product.image} alt={`${product.name} Cover`} on:click={() => openDetails(index)}>
        {/each}
    </div>
{/if}

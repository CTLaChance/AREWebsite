<script>
    import products from './products.json';

    // Details View //
    let details_open = false;
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
        // Animation styling.
        @keyframes details-slide {
            0% {
                transform: translate(15%, 0%);
            }

            100% {
                transform: translate(0%, 0%);
            }
        }

        @keyframes details-opacity {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        animation: details-slide 1s .25s cubic-bezier(.61,.02,.24,.98) both, details-opacity .75s .25s ease-in-out both;

        // Details styling.
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: center;

        #details-return-arrow {
            width: 15%;
            height: fit-content;

            cursor: pointer;

            img {
                width: 128px;
                height: 128px;
                display: block;
                margin: auto;

                transition: transform .25s 0s ease-in-out;
            }

            &:hover {
                // Moving the inner img element prevents fringe bouncing.
                img {
                    transform: translate(-25%, 0%);
                }
            }
        }

        #details-content{
            display: flex;
            align-items: center;
            width: 70%;
            height: 100%;
            margin: auto auto auto 0;

            font-family: 'Roboto';

            #details-cover {
                flex-basis: 35%;
                width: 35%;
                margin-right: 25px;
            }

            #details-text {
                display: flex;
                flex-direction: column;

                h2 {
                    font-size: 30px;
                    margin: 0;
                }

                i {
                    margin: 16px 0px;
                }

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
        // Animation styling.
        @keyframes grid-opacity {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        // animation: grid-opacity 0.75s 0.25s both ease-in-out;

        // Grid styling.
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
        <div id="details-return-arrow">
            <img src="back_arrow.svg" alt="Return to the product grid." on:click={() => closeDetails()}>
        </div>
        <div id="details-content">
            <img id="details-cover" src={products[details_index].cover} alt={`${products[details_index].name} Cover`}>
            <div id="details-text">
                <h2>{products[details_index].name}</h2>
                <p>{products[details_index].summary}</p>
                <div>
                    <button>Buy</button>
                    <button>Sample</button>
                </div>
                <i>Note: For large orders we recommend creating a purchase order by contacting us.</i>
                {#if products[details_index].spanish_cover}
                    <button>View Spanish Edition</button>
                {/if}
            </div>
        </div>
    </div>
{:else}
    <div id="grid">
        {#each products as product, index}
            <img src={product.cover} alt={`${product.name} Cover`} on:click={() => openDetails(index)}>
        {/each}
    </div>
{/if}

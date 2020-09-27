<script>
    import {Link} from 'svelte-routing';
    import products from './products.json';
</script>

<style lang="scss">
    #products {
        // Animation styling.
        @keyframes grid-opacity {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        animation: grid-opacity 0.75s 0.25s both ease-in-out;

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

            user-select: none;
        }

        // Mobile design.
        @media screen and (orientation: portrait) {
            display: flex;
            flex-direction: column;
        }
    }
</style>

<div id="products">
    {#each products as product, index}
        <Link to="{product.name}"><img src={product.cover} alt={`${product.name} Cover`}></Link>
    {/each}
</div>

<script>
    import {Link} from 'svelte-routing';
    import products from './products.json';
    
    export let index = 0;
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

                #details-buttons {
                    display: flex;
                }
            }
        }
    }
</style>

<div id="details">
    <div id="details-return-arrow"><Link to="/"><img src="back_arrow.svg" alt="Return to the product grid."></Link></div>

    <div id="details-content">
        <img id="details-cover" src={products[index].cover} alt={`${products[index].name} Cover`}>
        <div id="details-text">
            <h2>{products[index].name}</h2>
            <p>{products[index].summary}</p>
            <div id="details-buttons">
                <a href={products[index].link} target="_blank" class="button">Buy</a>
                <a href={products[index].sample} target="_blank" class="button">Sample</a>
                {#if products[index].spanish_cover}
                    <div class="button">View Spanish Edition</div>
                {/if}
            </div>
            <i>Note: For large orders we recommend creating a purchase order by <a href="#contact">contacting us.</a></i>
        </div>
    </div>
</div>
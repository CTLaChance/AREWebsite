<script>
    import {Link} from 'svelte-routing';
</script>

<style lang="scss">
    #return-arrow {
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
</style>

<div id="return-arrow"><Link to="/"><img src="back_arrow.svg" alt="Return to the product grid."></Link></div>
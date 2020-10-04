<script>
    import {Link} from 'svelte-routing';
</script>

<style lang="scss">
    #header {
        // Don't shrink the header whe main content changes.
        // Used in creating a sticky footer.
        flex-shrink: 0;
        margin: 0px auto;
        padding: 25px 0px;
        width: 70%;

        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-family: 'Montserrat';
            word-break: none;
            margin: 0;
        }

        img {
            height: 128px;
            width:  128px;
        }

        // Mobile design.
        @media screen and (orientation: portrait) {
            flex-direction: column;
            text-align: center;

            border-bottom: 1px solid #bbbbbb;
            img {
                margin-bottom: 16px;
            }
        }
    }
</style>

<div id="header">
    <Link to="/"><img src="favicon.png" alt="Logo"></Link>
    <h1>ALGEBRA READINESS EDUCATORS</h1>
</div>
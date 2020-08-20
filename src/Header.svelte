<script>
</script>

<style lang="scss">
    #header {
        width: 70%;
        margin: 0px auto;
        padding: 25px 0px;
        
        // Don't shrink the header whe main content changes.
        // Used in creating a sticky footer.
        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 128px;
            width:  128px;
        }

        h1 {
            word-break: none;
            margin: 0;
        }
    }
</style>

<div id="header">
    <img src="favicon.png" alt="Logo">
    <h1>ALGEBRA READINESS EDUCATORS</h1>
</div>
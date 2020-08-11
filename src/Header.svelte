<script>
</script>

<style lang="scss">
    #header {
        display: flex;
        justify-content: space-between;
        width: 70%;
        height: 150px;
        margin: auto;
        align-items: center;

        #branding {
            flex-grow: 2;
            display: flex;
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

        #buttons {
            flex-grow: 1;
            display: flex;
            justify-content: space-evenly;
            
            > * {
                padding: 10px 15px;
                border: 2px solid black;
                border-radius: 20px;

                &:hover {
                    color: white;
                    background-color: black;
                }
            }
        }
    }
</style>

<div id="header">
    <div id="branding">
        <img src="favicon.png" alt="Logo">
        <h1>ALGEBRA READINESS EDUCATORS</h1>
    </div>

    <div id="buttons">
        <div id="about">About</div>
        <div id="contact">Contact</div>
        <div id="testimonials">Testimonials</div>
    </div>
</div>
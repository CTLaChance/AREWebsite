<style lang="scss">
    #contact {
        width: 70%;
        margin: auto;
        
        display: flex;

        #contact-left {
            width: 40%;
            margin-right: 15px;

            h1 {
                margin-top: 0;
            }
        }

        form {
            width: 60%;
            display: flex;
            flex-direction: column;

            border-left: 1px solid #bbbbbb;
            padding-left: 15px;

            * > {
                border: none;
            }

            div {
                * > {
                    margin-right: 25px;
                }
            }
        }
    }
</style>

<div id="contact">
    <div id="contact-left">
        <h1>Contact Us</h1>
        <h3>Want to buy in bulk? Just want to say hello? <br> Send us an email and we'll get back to you soon.</h3>
        <a href="https://www.facebook.com/AlgebraReadinessEducatorsLLC/" target="_blank" width="24px" height="24px"><img src="facebook_icon.svg" alt="Facebook"></a>
    </div>

    <form>
        <div>
            <input type="text" id="name" placeholder="Name">
            <input type="email" id="email" placeholder="Email">
        </div>

        <input placeholder="Subject">
        <textarea placeholder="Compose your email here." rows="15"></textarea>
        <button>SEND</button>
    </form>
</div>
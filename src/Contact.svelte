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

            input, textarea {
                padding: 10px 10px;
                margin: 0 0 10px 0;
            }

            textarea {
                resize: none;
            }

            textarea::placeholder {
                font-family: 'Roboto';
            }

            button {
                width: 25%;
                // margin: auto;

                display: flex;
                justify-content: center;

                font-weight: 900;

                img {
                    vertical-align: middle;
                    margin-left: 10px;
                }

                &:hover {
                    img {
                        filter: invert(100%);
                    }
                }
            }

            #form-sender {
                display: flex;

                :first-child {
                    width: 40%;
                    margin-right: 10px;
                }

                :last-child {
                    width: 60%;
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
        <div id="form-sender">
            <input type="text" id="name" placeholder="Name">
            <input type="email" id="email" placeholder="Email">
        </div>

        <input placeholder="Subject">
        <textarea rows="15"></textarea>
        <button class="button">SEND<img src="send.svg" height="20px" weight="20px" alt="Send Icon"></button>
    </form>
</div>
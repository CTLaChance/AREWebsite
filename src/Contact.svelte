<style lang="scss">
    #contact {
        width: 70%;
        margin: auto;
        
        display: flex;

        #contact-left {
            width: 40%;
        }

        form {
            width: 60%;
            display: flex;
            flex-direction: column;
        }
    }
</style>

<div id="contact">
    <div id="contact-left">
        <h1>Contact Us</h1>
        <h2>Want to buy in bulk? Send us a message and we'll help set up a purchase order.</h2>
    </div>

    <form>
        <label for="name">Name: </label>
        <input type="text" id="name">

        <label for="email">Email: </label>
        <input type="email" id="email">

        <textarea placeholder="Compose your email here." rows="15"></textarea>
        <button>Send</button>
    </form>
</div>
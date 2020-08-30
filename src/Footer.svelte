<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();


</script>

<style lang="scss">
    #footer {
        padding: 25px 15%;
        background-color: #fafafa;
        
        font-size: 14px;
        line-height: 20px;

        flex-shrink: 0;

        #footer-main {
            color: #bbbbbb;

            padding: 25px 0px;

            display: flex;
            justify-content: center;

            > * {
                width: 50%;
            }

            #footer-company {
                font-family: 'Montserrat';

                display: flex;
                justify-content: flex-end;
                align-items: center;

                padding-right: 10px;
            }

            #footer-links {
                display: flex;
                flex-direction: column;
                justify-content: center;

                border-left: 2px solid;
                padding-left: 10px;

                cursor: pointer;

                > *:hover {
                    color: black;
                }
            }
        }

        #footer-lower {
            color: #bbbbbb;
            font-size: 16px;
            font-family: monospace;

            display: flex;
            justify-content: space-between;

            padding: 25px 0px;
            border-top: 2px solid;

            a {
                background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(30, 100%, 50%), hsl(60, 100%, 50%), hsl(90, 100%, 50%), hsl(120, 100%, 50%), hsl(150, 100%, 50%), hsl(180, 100%, 50%), hsl(210, 100%, 50%), hsl(240, 100%, 50%), hsl(270, 100%, 50%), hsl(300, 100%, 50%), hsl(330, 100%, 50%), hsl(360, 100%, 50%));
                background-size: 200% 200%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                animation: BackgroundScroll 3s linear infinite;

                @keyframes BackgroundScroll {
                    0%{background-position:0% 50%}
                    100%{background-position:200% 50%}
                }

                &:hover {
                    animation-duration: 1s;
                }
            }
        }
    }
</style>

<div id="footer">
    <div id="footer-main">
        <div id="footer-company">
            <img src="./favicon.png" alt="Company Logo" width="64px">
            <h4>Algebra Readiness Educators</h4>
        </div>

        <div id="footer-links">
            <div on:click={() => dispatch('openView', {view: "About"})}>About</div>
            <div on:click={() => dispatch('openView', {view: "Contact"})}>Contact</div>
            <div on:click={() => dispatch('openView', {view: "Testimonials"})}>Testimonials</div>
        </div>
    </div>

    <div id="footer-lower">
        <div>© 2020 Algebra Readiness Educators, LLC</div>
        <div>Design work by <a href="https://ctlachance.com">Christopher LaChance</a>.</div>
    </div>
</div>
<script>
</script>

<style lang="scss">
    #footer {
        padding: 50px 15%;
        background-color: #fafafa;

        #footer-main {
            margin-bottom: 25px;
            display: flex;
            
            > * {
                width: 50%;
            }

            :first-child {
                display: flex;

                #tagline {
                    margin: auto;
                }
            }
        }

        #footer-lower {
            color: #bbbbbb;
            border-top: 2px solid;
            font-family: monospace;
            font-size: 16px;

            display: flex;
            justify-content: space-between;

            padding: 25px 0px;

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
        <div>
            <img src="./favicon.png" height="128px" alt="Company Logo">
            <div id="tagline">
                Algebra Readiness Educators, LLC is a company that does stuff and offers products like the ones above. Buy our stuff please.
            </div>
            <div id="social-media">
                
            </div>
        </div>
        <div>
            <div>About</div>
            <div>Contact</div>
            <div>Testimonials</div>
            <div>Media Kit</div>
        </div>
    </div>

    <div id="footer-lower">
        <div>© 2020 Algebra Readiness Educators, LLC</div>
        <div>Design work by <a href="https://ctlachance.com">Christopher LaChance</a>.</div>
    </div>
</div>
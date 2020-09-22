<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    import {Link} from 'svelte-routing';
</script>

<style lang="scss">
    #footer {
        padding: 32px 15%;
        margin-top: 25px;
        background-color: #fafafa;
        
        font-size: 14px;
        line-height: 20px;

        #footer-upper {
            display: flex;
            align-items: center;

            #footer-left {
                width: 50%;
                
                #footer-company {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                    font-family: 'Montserrat';
                    font-size: 16px;
                    padding-right: 32px;
                }
            }

            #footer-right {
                display: flex;
                flex-direction: column;
                justify-content: center;

                border-left: 2px solid;
                padding-left: 32px;

                color: #bbbbbb;
                cursor: pointer;
            }
        }

        #footer-lower {
            color: #bbbbbb;
            text-align: center;
            font-size: 12px;
            padding-top: 32px;

            a {
                background: linear-gradient(to right, hsl(0, 100%, 45%), hsl(30, 100%, 45%), hsl(50, 100%, 45%), hsl(90, 100%, 45%), hsl(120, 100%, 45%), hsl(150, 100%, 45%), hsl(180, 100%, 45%), hsl(210, 100%, 45%), hsl(240, 100%, 45%), hsl(270, 100%, 45%), hsl(300, 100%, 45%), hsl(330, 100%, 45%), hsl(360, 100%, 45%));
                background-size: 200% 200%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                animation: BackgroundScroll 10s linear infinite;

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
    <div id="footer-upper">
        <div id="footer-left">
            <div id="footer-company">
                <img src="./favicon.png" alt="Company Logo" width="64px">
                <h4>ALGEBRA READINESS EDUCATORS</h4>
            </div>
        </div>

        <div id="footer-right">
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="testimonials">Testimonials</Link>
            <Link to="licensing">Licensing</Link>
        </div>
    </div>

    <div id="footer-lower">
        <div>© 2020 Algebra Readiness Educators, LLC</div>
        <div>Design work by <a href="https://ctlachance.com" target="_blank">Christopher LaChance</a>.</div>
    </div>
</div>
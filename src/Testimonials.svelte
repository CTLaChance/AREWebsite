<script>
    import ReturnArrow from './ReturnArrow.svelte';
    import testimonials from './testimonials.json';
</script>

<style lang="scss">
    #testimonials {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 100%;

        animation: component-load 1s .25s cubic-bezier(.61,.02,.24,.98) both;

        #testimonials-content {
            width: 70%;
            margin: auto auto auto 0;

            display: flex;

            #testimonials-left {
                margin-right: 15px;
            }

            #testimonials-right {
                border-left: 1px solid #bbbbbb;
                padding-left: 15px;

                display: flex;
                justify-content: center;
                align-items: center;

                #testimonials-picture {
                    margin-right: 15px;
                }
            }

            h1 {
                margin-top: 0;
            }

            h3, h4{
                font-weight: 400;
                text-align: justify;
            }
        }
    }
</style>

<div id="testimonials">
    <ReturnArrow />
    <div id="testimonials-content">
        <div id="testimonials-left">
            <h1>TESTIMONIALS</h1>
            <h3>See what others are saying about Algebra Readiness Educators.</h3>

            {#each testimonials as testimonial, index}
                <div>{index}</div>
            {/each}
        </div>

        <div id="testimonials-right">
            <img id="testimonials-picture" src={testimonials[0].picture}>
            <div>
                <h3>"{testimonials[0].testimonial}"</h3>
                <h4>- {testimonials[0].author}</h4>
            </div>
        </div>
    </div>
</div>
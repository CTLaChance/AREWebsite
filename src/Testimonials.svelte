<script>
    import ReturnArrow from './ReturnArrow.svelte';
    import testimonials from './testimonials.json';

    let index = 0;
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
                display: flex;
                flex-direction: column;

                #testimonials-navigation {
                    margin-top: auto;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-size: 32px;

                    > * {
                        margin-right: 15px;
                    }

                    img {
                        width: 32px;
                        height: 32px;
                        cursor: pointer;
                    }
                }
            }

            #testimonials-right {
                border-left: 1px solid #bbbbbb;
                padding-left: 15px;
            }

            h1, h3, h4 {
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
            
            <div id="testimonials-navigation">
                <img src="back_arrow.svg" alt="Previous testimonial." on:click={() => {if(--index < 0) index = testimonials.length - 1}}>
                <div>{index + 1} / {testimonials.length}</div>
                <img src="forward_arrow.svg" alt="Next testimonial." on:click={() => {if(++index >= testimonials.length) index = 0}}>
            </div>
        </div>

        <div id="testimonials-right">
            <h3>"{testimonials[index].testimonial}"</h3>
            <h4>- {testimonials[index].author}</h4>
        </div>
    </div>
</div>
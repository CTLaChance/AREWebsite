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
            $width: 50%;
            width: $width;
            margin: auto auto auto #{(35% - ($width / 2))};

            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

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

            h1{
                border-bottom: 1px solid #bbbbbb;
            }

            h3, h4{
                font-weight: 400;
                text-align: justify;
            }
        }

        @media screen and (orientation: portrait) {
            flex-direction: column;
            height: fit-content;

            #testimonials-content {
                width: 70%;
                margin: 0 auto;

                h1 {
                    border: none;
                    text-align: center;
                }
            }
        }
    }
</style>

<div id="testimonials">
    <ReturnArrow />
    <div id="testimonials-content">
        <div>
            <h1>TESTIMONIALS</h1>
            <h3>"{testimonials[index].testimonial}"</h3>
            <h4><i>- {testimonials[index].author}</i></h4>
        </div>

        <div id="testimonials-navigation">
            <img src="back_arrow.svg" alt="Previous testimonial." on:click={() => {if(--index < 0) index = testimonials.length - 1}}>
            <div>{index + 1} / {testimonials.length}</div>
            <img src="forward_arrow.svg" alt="Next testimonial." on:click={() => {if(++index >= testimonials.length) index = 0}}>
        </div>
    </div>
</div>
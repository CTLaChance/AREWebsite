<script>
    import products from './products.json';
    import ReturnArrow from './ReturnArrow.svelte';

    import {Link} from 'svelte-routing';

    export let index = 0;
</script>

<style lang="scss">
    #details {
        // Animation styling.
        @keyframes details-slide {
            0% {
                transform: translate(15%, 0%);
            }

            100% {
                transform: translate(0%, 0%);
            }
        }

        @keyframes details-opacity {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        animation: component-load 1s .25s cubic-bezier(.61,.02,.24,.98) both;

        // Details styling.
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: center;

        #details-content{
            display: flex;
            align-items: center;
            width: 70%;
            height: 100%;
            margin: auto auto auto 0;

            #details-cover {
                flex-basis: 35%;
                width: 35%;
                margin-right: 25px;
            }

            #details-text {
                display: flex;
                flex-direction: column;

                h2 {
                    font-size: 30px;
                    margin: 0;
                }

                i {
                    margin: 16px 0px;

                    span {
                        text-decoration: underline;
                    }
                }

                #details-buttons {
                    margin-top: 16px;
                    display: flex;
                }
            }
        }
    }
</style>

<div id="details">
    <ReturnArrow />
    <div id="details-content">
        <img id="details-cover" src={products[index].cover} alt={`${products[index].name} Cover`}>
        <div id="details-text">
            <h2>{products[index].name.replace("_"," ")}</h2>
            <p>Algebra Readiness Builders are designed to enhance the math skills of your students by introducing and honing a concept through repeition and at home practice. Each book contains 80 builders with which you can build a foundation for the next level.</p>
            <p>This builder focuses on developing the following skills, amongst others:</p>
            <div id="details-skills">
                {#each products[index].skill_list as skill}
                    <li>{skill}</li>
                {/each}
            </div>
            <div id="details-buttons">
                <a href={products[index].link} target="_blank" class="button">Buy</a>
                <a href={products[index].sample} target="_blank" class="button">Sample</a>
            </div>
            <i>Note: For large orders we recommend creating a purchase order by <Link to="contact"><span>contacting us.</span></Link></i>
        </div>
    </div>
</div>
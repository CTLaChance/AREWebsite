<script>
    import products from './products.json';
    import ReturnArrow from './ReturnArrow.svelte';

    import {Link} from 'svelte-routing';

    export let index = 0;
</script>

<style lang="scss">
    #details {
        animation: component-load 1s .25s cubic-bezier(.61,.02,.24,.98) both;

        // Details styling.
        height: fit-content;
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

            @media screen and (orientation: portrait) {
                flex-direction: column;
                margin: auto;
                
                #details-cover {
                    width: 100%;
                    margin: 16px 0;
                }

                #details-text {
                    width: 100%;

                    h2 {
                        text-align: center;
                    }

                    #details-buttons {
                        flex-direction: column;

                        a {
                            margin: 8px 0px;
                            text-align: center;
                        }
                    }
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
            <h2>{products[index].name.replaceAll("_"," ")}</h2>
            <p>Algebra Readiness Builders are designed to enhance the math skills of your students by introducing and honing a concept through repetition and at home practice. Each book contains 80 builders with which you can build a foundation for the next level.</p>
            <p>Here are some of the skills this builder helps develop:</p>
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

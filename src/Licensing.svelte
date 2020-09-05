<script>
    import ReturnArrow from './ReturnArrow.svelte';
</script>

<style lang="scss">
    #licensing {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 100%;

        animation: component-load 1s .25s cubic-bezier(.61,.02,.24,.98) both;

        #licensing-content {
            width: 70%;
            margin: auto auto auto 0;

            h1 {
                margin-top: 0;
            }

            h3 {
                font-weight: 400;
                text-align: justify;
            }
        }
    }
</style>

<div id="licensing">
    <ReturnArrow />
    <div id="licensing-content">
        <h1>LICENSING</h1>
        <h3>The reproduction rights grant permission to the purchaser of this book to reproduce copies ONLY for the students in a teacher’s classroom. This right does not extend to other teachers, to the entire grade level of teachers, to the entire campus, or to the entire school district. We allow the copying of our books for student use only.<br><br>Our copyright prohibits any of our materials to be published on individual or teacher webpage’s where access to the internet by the general public is accessible. It also prohibits the resale of our products to individuals or web based book companies.<br><br>Each teacher or individual using the builder books need to have a copy of the book or books in his or her possession.</h3>
    </div>
</div>
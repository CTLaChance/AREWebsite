<script>
</script>

<style lang="scss">
    #grid {
        width: 70%;
        margin: 25px auto;

        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto auto auto;
        grid-gap: 5px;

        img {
            width: 100%;
            height: auto;

            &:hover {
                filter: grayscale(1);
            }
        }
    }
</style>

<div id="grid">
    <img src="./covers/grade3_cover.jpg" alt="Grade 3 Cover">
    <img src="./covers/grade3_spanish_cover.jpg" alt="Grade 3 Spanish Cover">
    <img src="./covers/grade4_cover.jpg" alt="Grade 4 Cover">
    <img src="./covers/grade4_spanish_cover.jpg" alt="Grade 4 Spanish Cover">
    <img src="./covers/grade5_cover.jpg" alt="Grade 5 Cover">
    <img src="./covers/grade6_cover.jpg" alt="Grade 6 Cover">
    <img src="./covers/grade7_cover.jpg" alt="Grade 7 Cover">
    <img src="./covers/prealgebra_cover.jpg" alt="Pre Algebra Cover">
    <img src="./covers/algebra1_cover.jpg" alt="Algebra 1 Cover">
    <img src="./covers/geometry_cover.jpg" alt="Geometry Cover Cover">
    <img src="./covers/algebra2_cover.jpg" alt="Algebra 2 Cover">
</div>
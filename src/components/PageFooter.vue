<template>
    <footer>
        <div class="footer-text">
            <p class="footer-copyright">© Yinkajay 2023</p>
            <p class="footer-build">Built with Vue

            </p>
        </div>
    </footer>
</template>

<script>
import VueIcon from '../../public/vue.svg'

export default {
    components: {
        VueIcon
    }
}
</script>

<style>
footer {
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;

}

footer p {
    color: white;
    padding: 3px;
}

.footer-text {
    text-align: center;
    width: max-content;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 0 auto;
}

.footer-copyright {
    font-weight: bold;
}

.footer-build {
    color: #E6D5AA;
    font-size: 13px;
}
</style>
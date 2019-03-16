<template>
    <div>
        <Syheader></Syheader>
        <Sycontent></Sycontent>
        <Sytotop></Sytotop>
    </div>
</template>
<script>
    import Syheader from '../components/Syheader'
    import Sycontent from '../components/Sycontent'
    import Sytotop from '../components/Sytotop'

    export default {
        components : {
            Syheader,
            Sycontent,
            Sytotop
        }
    }
</script>
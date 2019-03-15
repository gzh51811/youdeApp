<template>
    <section>
        <Sybanner></Sybanner>
        <div data-v-0f5990e2="" class="line"></div>
        <Symenu></Symenu>
        <SynewPeople></SynewPeople>
        <div data-v-0f5990e2="" class="line"></div>
        <Syhaibao></Syhaibao>
        <Symiaosha></Symiaosha>
        <div data-v-0f5990e2="" class="line"></div>
        <Sytoday></Sytoday>
        <div data-v-0f5990e2="" class="line"></div>
        <Syintroduce></Syintroduce>
    </section>
</template>
<script>
    import Sybanner from './Sybanner'
    import Symenu from './Symenu'
    import SynewPeople from './SynewPeople'
    import Syhaibao from './Syhaibao'
    import Symiaosha from './Symiaosha'
    import Sytoday from './Sytoday'
    import Syintroduce from './Syintroduce'

    export default {
        components : {
            Sybanner,
            Symenu,
            SynewPeople,
            Syhaibao,
            Symiaosha,
            Sytoday,
            Syintroduce
        }
    }
</script>
<style scoped>
    .line{
        height:0.3em !important;
    }
</style>
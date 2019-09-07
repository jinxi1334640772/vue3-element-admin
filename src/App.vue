<template>
    <div>
        <div v-for="item in items" :key="item.id">
            {{ item.name }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:'张进喜',
            items:[
                {name:'张进喜',hobit:'打球',age:23},
                {name:'王天云',hobit:'看书',age:24},
                {name:'陈军华',hobit:'游泳',age:25},
                {name:'丁雅静',hobit:'看电影',age:22},
            ]
        }
    },
}
</script>

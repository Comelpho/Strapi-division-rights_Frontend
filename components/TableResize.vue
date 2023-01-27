<template lang='pug'>
table(ref="tableResize", v-if="data.length > 0").table.table-bordered.mx-3
    thead
        tr
            th(scope='col') #
            th(scope='col') Название
            th(scope='col') Данные
    tbody
        tr(v-for="(item, index) in data")
            td(scope='row') {{ index + 1 }}
            td {{ item.attributes.title }}
            td {{ item.attributes.text }}
span.mx-3(v-else)
    | Страница недоступна или загружается
   
</template>


<script setup>

const { data } = defineProps({
    data: Array,
})

console.log(data);


const tableResize = ref(false)

onMounted(() => {
    let elmColumn;
    let startOffset;
    if (tableResize.value) {
        [...tableResize.value.querySelectorAll("td"), ...tableResize.value.querySelectorAll("th")].forEach((column) => {

            column.style.position = 'relative';

            var grip = document.createElement('div');
            grip.innerHTML = "&nbsp;";
            grip.style.top = 0;
            grip.style.right = 0;
            grip.style.bottom = 0;
            grip.style.width = '5px';
            grip.style.position = 'absolute';
            grip.style.cursor = 'col-resize';
            grip.addEventListener('mousedown', function (e) {
                elmColumn = column;
                startOffset = column.offsetWidth - e.pageX;
            });

            column.appendChild(grip);

        })


        document.addEventListener('mousemove', function (e) {
            if (elmColumn) {
                elmColumn.style.width = startOffset + e.pageX + 'px';
            }
        });

        document.addEventListener('mouseup', function () {
            elmColumn = undefined;
        });
    }

})


</script>

<style lang='scss' scoped>
table {
    width: auto;
}
</style>
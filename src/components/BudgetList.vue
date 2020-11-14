<template>
    <div class="budget-list-wrap">
        <el-card :header="header">
            <template v-if="!isEmpty">
                <BudgetListItem />
            </template>
            <el-alert v-else type="info" :title="emptyTitle" :closable="false" />
            
        </el-card>
    </div>
</template>

<script>
import BudgetListItem from './BudgetListItem'
import { mapGetters } from 'vuex'
export default {
    name: 'BudgetList',
    components: {
        BudgetListItem,
    },
    data: () => ({
        header: 'Budget List',
        emptyTitle: 'Empty List',
    }),
    computed: {
        ...mapGetters(['getListItem']),
        isEmpty() {
            return !Object.keys(this.getListItem).length
        },
    },
    methods: {
        deleteItem(id) {
            this.$emit('deleteItem', id)
        }
    }
    
}
</script>

<style scoped>
    .budget-list-wrap {
        max-width: 500px;
        margin: auto;
    }
</style>
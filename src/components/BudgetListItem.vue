<template>
    <div>
        <div class="list-item" v-for="(item, prop) in list" :key="prop">
            <i v-if="item.type === 'INCOME'" class="el-icon-top"></i>
            <i v-if="item.type === 'OUTCOME'" class="el-icon-bottom"></i>
            <span class="budget-comment">{{ item.comment }}</span>
            <span class="budget-value" :style="setValueColor(item.value)">{{ item.value }}</span>
            <el-button type="danger" size="mini" @click="dialogVisible = true">Delete</el-button>
            <el-dialog
            title=""
            :visible.sync= dialogVisible
            width="30%">
            <span>Are you sure you want to delete?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false, deleteItem(item.id)">Confirm</el-button>
            </span>
            </el-dialog>
        </div>

         
    </div>
</template>

<script>
export default {
    name: 'BudgetListItem',
    data: () => ({
        dialogVisible: false,
        valueColor: {
            green: 'color: #04D627',
            red: "color: #D10404"
        }
    }),
    props: {
        list: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        deleteItem(id) {
            this.$emit('deleteItem', id)
        },
        setValueColor(value) {
            if(value <= 0) {
                return this.valueColor.red
            }else {
                return this.valueColor.green
            }
        }
        
    }

}
</script>

<style scoped>
    .list-item {
        display: flex;
        align-items: center;
        padding: 10px 15px;
    }
    .budget-value {
        font-weight: bold;
        margin-left: auto;
        margin-right: 20px;
    }
</style>
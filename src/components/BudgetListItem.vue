<template>
    <div>
        <div class="list-item" v-for="(item, prop) in getListItem" :key="prop">
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
                <el-button type="primary" @click="dialogVisible = false, onDeleteItem(item.id)">Confirm</el-button>
            </span>
            </el-dialog>
            
        </div>

         
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'BudgetListItem',
    data: () => ({
        dialogVisible: false,
        valueColor: {
            green: 'color: #04D627',
            red: "color: #D10404"
        }
    }),
    methods: {
        ...mapMutations(['DELETE_ITEM']),
        setValueColor(value) {
            if(value <= 0) {
                return this.valueColor.red
            }else {
                return this.valueColor.green
            }
        },
        onDeleteItem(id) {
            this.DELETE_ITEM(id)
        },

    },
    computed: {
        ...mapGetters(['getListItem']),
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
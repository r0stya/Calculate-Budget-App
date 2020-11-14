<template>
    <div class="total-value" :style="balanceColor">
        Balance: {{ totalBalance || 0 }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TotalBalance',
    data: () => ({
        colors: ['#000', '#04D627', '#D10404'],
    }),
    computed: {
        ...mapGetters(['getListItem']),
        balanceColor() {
            if(this.totalBalance > 0) {
                return `color: ${this.colors[1]}`
            }else if(this.totalBalance < 0) {
                return `color: ${this.colors[2]}`
            }else {
                return `color: ${this.colors[0]}`
            }
        },
        totalBalance() {
            return Object.values(this.getListItem).reduce((acc, i) => acc += i.value, 0)
        }

    }
}
</script>

<style scoped>
    .total-value{
        font-size: 26px;
        text-transform: uppercase;
        padding: 20px;
        text-align: center;
    }
</style>
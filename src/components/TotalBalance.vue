<template>
    <div class="total-value" :style="balanceColor">
        Balance: {{ total }}
    </div>
</template>

<script>
export default {
    name: 'TotalBalance',
    data: () => ({
        colors: ['#000', '#04D627', '#D10404'],
    }),
    props: {
        total: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        balanceColor() {
            if(this.total > 0) {
                return `color: ${this.colors[1]}`
            }else if(this.total < 0) {
                return `color: ${this.colors[2]}`
            }else {
                return `color: ${this.colors[0]}`
            }
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
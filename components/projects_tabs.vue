<template>
    <article>
        <section class="tabs-details flex flex-row">
            <slot>
                
            </slot>
        </section>
    </article>
</template>

<script>
    export default {
        data: () => {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        }
    }
</script>
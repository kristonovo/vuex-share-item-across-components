<template>
    <div>
        <button @click="increment(1)">Increment +1</button>
        <p v-text="invitations"></p>
    </div>
</template>

<script>
    import { incrementInvitations } from '../vuex/actions'
    import { invitations } from '../vuex/getters'
    export default {
        vuex: {
            actions: {
                increment: incrementInvitations
            },
            getters: {
                invitations
            }
        }
    }
</script>
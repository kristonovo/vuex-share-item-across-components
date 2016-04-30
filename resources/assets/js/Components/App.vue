<template>
    <div style="margin-bottom: 20px">
        {{ invitations }}
    </div>
    <div>
        <Display></Display>
        <Increment></Increment>
    </div>
</template>

<script>

    import Display from './Display.vue'
    import Increment from './Increment.vue'
    import { setInvitations } from '../vuex/actions'
    import { invitations } from '../vuex/getters'

    export default {
        props: ['invis'],
        data: function () {
            return {}
        },
        components: {
            Display,
            Increment
        },
        vuex: {
            actions: {
                setInvitations
            },
            getters: {
                invitations
            }
        },
        ready: function () {
            this.setInvitations(this.invis)
        }
    }
</script>
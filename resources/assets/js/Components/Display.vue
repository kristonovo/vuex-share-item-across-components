<template>
    <div>
        <h3>Invitations: {{ invitations }}</h3>
    </div>
</template>

<script>
    import { invitations } from '../Vuex/getters'
    export default {
        vuex: {
            getters: {
                invitations
            }
        }
    }
</script>
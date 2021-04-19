<template>
    <div class="container">
        <h4 class="mt-3">Welcome</h4>
        <h5>
            {{$store.state.auth.userInfo.name}}
        </h5>
        <p>{{$store.state.auth.userInfo.email}}</p>
        <p>{{$store.state.auth.userInfo.phone}}</p>
    </div>
</template>
<script>
export default {
    name: 'UserProfile'
}
</script>

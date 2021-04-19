<template>
    <div class="sidebar">
        <h4>this is my profie</h4>
        <ul>
            <li>
                <router-link to="/user/profile">My Profile</router-link>
            </li>
            <li>
                <router-link to="/user/order">My Order</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Sidebar'
}
</script>

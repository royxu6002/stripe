<template>
    <div class="container col-8 offset-2">
        <h4>this is user index page</h4>
        <!-- 该页面涉及到分页, 未设计 -->
        <div v-if="loading" class="loading"> 
            loading data...
        </div>
        <div v-if="error" class="error">
            <p>oops, sorry, it seems that something has go wrong</p>
            <span v-text="error"></span>
        </div>
        <div>
            <ul v-if="users">
                <li v-for="(user, index) in users" :key="index">
                    <span v-text="user.name">
                    </span>
                    <span v-text="user.email"></span>
                </li>
            </ul>
        </div>
        <div class="pagination">
            <button 
                :disabled="! prevPage" 
                @click.prevent="goToPrev">Previous
            </button>
            {{paginationCount}}
            <button 
                :disabled="! nextPage" 
                @click.prevent="goToNext">Next
            </button>
        </div>
    </div>
</template>
<script>
import axios from "axios";

const getUsers = (page, callback) => {
    const params = { page };

    axios.get('api/users', {params})
        .then(res => {
            callback(null, res.data);
        })
        .catch(err => {
            callback(err, err.response.data);
        })
}
export default {
    data() {
        return {
            loading: false,
            error: null,
            users: null,
            links: {
                first: null,
                last: null,
                next: null,
                prev: null,
            },
            meta: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        getUsers(to.query.page, (err, data) => {
            next(vm => vm.setData(err, data));
        });
        // axios.get('/api/users', {
        //     params: {
        //         page: to.query.page
        //     }
        // }).then(res => {
        //     // 因为不好判断取得数据是成功还是失败, 所以放两个键, 第一放失败数据, 第二个放成功数据;
        //     next(vm => vm.setData(null,res.data));
        // }).catch(err => {
        //     next(vm => vm.setData(err.response.data, null));
        // })
    },
    beforeRouteUpdate(to, from, next){
        this.users = this.links = this.meta = null;
        getUsers(to.query.page, (err, data) => {
           this.setData(err, data);
           next();
        })
    },
    methods: {
        setData(err, {data: users, links, meta}) {
            if(err) this.error = err.toString();
            this.users = users;
            this.links = links;
            this.meta = meta;
        },
        goToNext() {
            this.$router.push({
                query: {
                    page: this.nextPage,
                }
            })
        },
        goToPrev() {
            this.$router.push({
                name: 'Users.Index',
                query: {
                    page: this.prevPage,
                }
            })
        }
    },
    computed: {
        nextPage() {
            if(!this.meta || this.meta.current_page === this.meta.last_page) return;
            return this.meta.current_page + 1;
        },
        prevPage() {
            if(!this.meta || this.meta.current_page ===1) return;
            return this.meta.current_page - 1;
        },
        paginationCount() {
            if(! this.meta) return;
            const {current_page, last_page} = this.meta;
            // return `${current_page} of ${last_page}`;
            return current_page+ 'of' + last_page;
        }
    }
}
</script>

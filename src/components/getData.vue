<template>
  <div>
    <!-- <div>getData</div> -->
    <hr />
    <div v-if="userList === null" class="loader">
            <img width="300" src="https://gifburg.com/images/gifs/loading/gifs/0013.gif" />
            <h4>데이터를 불러오는 중입니다.</h4>
        </div>

        <div v-else-if="userList.length < 1" class="loader">
            <h4>
                <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
                유저가 발견되지 않았습니다.
            </h4>
        </div>

        <div v-else>
            <ul style="list-style: none;">
                <router-link to="/datail" v-for="(user,idx) in userList" :key="idx">
                    <h4>{{ user.name }}</h4>
                    <!-- <hr />
                    <p>
                        ({{ user.address.zipcode }}) {{ user.address.street }}
                    </p>
                    <hr />
                    <a :href="'mailto:' + user.email">{{user.email}}</a>
                    <a :href="'tel:+' + user.phone">+ {{user.phone}}</a> -->
                </router-link>
            </ul>
        </div>
    <button @click="fetchData()">새로고침</button>
    <!-- <user-datail /> -->
    <user-list />
  </div>
</template>

<script>
import UserList from './UserList.vue';
// import UserDatail from './UserDatail.vue';

export default {
    components: {
    UserList,
    // UserDatail,
},
    
    data() {
        return {
            userList : null,
            UserDatai : null,
        }
    },
    
    methods: {
        fetchData: function() {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(function(response) {
                // response
                if(response.status !== 200){
                    alert('통신에러!');
                    self.userList = [];
                }else{
                    self.userList = response.data;
                }
            })
            // .catch(function(error) {
            // console.log(error);
            // });
        }
    },
    
    mounted() {
        this.fetchData();
    },
}
</script>

<style>
.loader{
    text-align:center;
    padding:40px 0;
    border:1px solid #eee;
    border-radius:10px;
    margin:40px;
}
</style>
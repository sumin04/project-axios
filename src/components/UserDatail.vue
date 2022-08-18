<template>
  <div>
    <!-- <div>getData</div> -->
    <hr />
    <div v-if="userList === null" class="loader">
        <img width="300" src="https://gifburg.com/images/gifs/loading/gifs/0013.gif" />
        <!-- <h4>정보를 불러오는 중입니다.</h4> -->
    </div>

    <div v-else-if="userList.length < 1" class="loader">
        <h4>
            <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
            유저가 정보가 발견되지 않았습니다.
        </h4>
    </div>

    <div v-else>
      <ul v-for="(user,idx) in userList" :key="idx">
          <!-- <h4>{{ user.name }}</h4> -->
          <hr />
            <p>
                ({{ user.address.zipcode }}) {{ user.address.street }}
            </p>
          <hr />
          <a :href="'mailto:' + user.email">{{user.email}}</a>
          <a :href="'tel:+' + user.phone">+ {{user.phone}}</a>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      props :{
        UserDatail : String,
        UserList : String,
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

</style>
var taro = new Vue({
    el: "#app",
    data: {
      postnum:"",
      address:{},
      query:"",
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        "Content-Type": "application/json"
      }
    },
    methods:{
      getaddress:function(){
        if(this.postnum>1000000 && this.postnum<9999999){
          axios
            .get('https://zip-cloud.appspot.com/api/search?zipcode=7830060', { headers: this.headers , data:{} })
            .then(response => (this.address = response.data.results))
            console.log(this.address)
        }
      }
    }
})
///'https://zip-cloud.appspot.com/api/search?zipcode='+String(this.postnum)
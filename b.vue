<script>
    export default {
        methods: {
            onAppClick: function () {
                fetch('/shell/exec', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cwd: 'D:/github/vue-icon/src',
                        cmd: 'dir'
                    })
                }).then(res => res.json()).then(res => {
                    if(res.success){
                        this.$message.success(res.data)
                    }else{
                         this.$message.error(res.data)
                    }
                })
            }
        }
    }
</script>

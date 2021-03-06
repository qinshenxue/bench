Bench = {
    http: {
        post: function (url, form, options) {
            return fetch('/http/post', {
                method: 'post',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(Object.assign({
                    url: url,
                    form: form
                }, options))

            }).then(res => res.json())
        },
        get: function (url, form, options) {
            return fetch('/http/get', {
                method: 'post',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(Object.assign({
                    url: url,
                    form: form
                }, options))

            }).then(res => res.json())
        }
    },

    shell: {
        openCMD: function (dir, cmd) {
            fetch('/shell/openCMD', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cwd: dir,
                    cmd: cmd
                })
            }).then(res => res.json()).then(res => {
                console.log(res)
            })
        }
    }
}
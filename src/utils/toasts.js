export  default  function makeToast(that,variant = null,content) {
    that.$bvToast.toast(content, {
        variant: variant,
        solid: true,
        autoHideDelay: 3000,
    })
}
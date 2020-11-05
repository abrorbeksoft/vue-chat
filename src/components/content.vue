<template>
    <div id="content">
        <div class="row">
            <div id="area" class="col ml-2 p-0">

            </div>
        </div>
        <div class="row">
            <div class="col">
                <textarea class="form-control" name="" id="" cols="30" rows="4"></textarea>
                <button class="btn mt-2 btn-primary">Send</button>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    name:'content'
}
</script>

<style  scoped>
#area{
    margin-bottom: 15px;
    height: 320px;
    overflow-y:scroll;
}
</style>

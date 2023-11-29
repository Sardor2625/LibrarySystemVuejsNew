<template>
    <div>
        <button class="w-50 py-2">
            <slot></slot>
        </button>
        
    </div>
</template>
<script>
export default {
    name: 'Button'
}
</script>
<style>
    button {
    background: #4499D7;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    margin-top: 20px;
}

button:hover{
background-color: #1467a2;
transition: 0.5s;
}
</style>
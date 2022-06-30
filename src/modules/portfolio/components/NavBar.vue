<template>
    <div class="navBar">
        <ul>
            <li>
              <router-link :to="{name: 'phome'}"><span>Inicio</span> <br>
                <font-awesome-icon icon="fa-solid fa-house-user" size="3x"/></router-link>   
            </li>

            <li>
              <router-link :to="{name: 'pabout'}"><span>Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-user" size="3x"/></router-link>
            </li>

            <li>
              <router-link :to="{name: 'pprojects'}"><span>Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-briefcase" size="3x"/></router-link>
            </li>

            <li>
              <router-link :to="{name: 'pcontact'}"><span>Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-phone" size="3x"/></router-link>
            </li>
        </ul>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
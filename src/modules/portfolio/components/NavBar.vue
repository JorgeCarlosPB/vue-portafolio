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
.navBar{
    margin-left: auto;  
    order: 2;
    /* max-width: 15%;
    min-width: 10%; */
}

.navBar ul {
    display: flex;
    flex-direction: column;
    border-radius: 20px 0 0 20px;
    list-style-type: none;
    overflow: hidden;
}

.navBar li{
    background-color: orange;
}

.navBar li  a{
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 25px 0px 25px 0px;
}

.navBar li a span{
    visibility: hidden;
    font-size: 25px;
}

.navBar li a:hover span{
    visibility: visible;
}

.navBar li:hover{
    background-color: black;
}

</style>
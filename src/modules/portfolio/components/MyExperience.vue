<template>
  <div class="formacion"
    v-if="persona.educacion">

        <h2 :style="{color:currentMode.color3}">Experiencia Laboral</h2> <br>
        <div class="education">
            <div class="educationItem" v-for="experiencia in persona.experiencia" :style="{backgroundColor:currentMode.color2}">
                <h4 :style="{color:'#ff651c'}">{{experiencia.nombre}}</h4>
                <h5 :style="{color:currentMode.color3}">{{experiencia.institucion}}</h5>
                <h6 :style="{color:currentMode.color3}">{{experiencia.fechaInicio}} hasta {{experiencia.fechaFin}}</h6>
                <p>{{experiencia.descripcion}}</p>
            </div>
        </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
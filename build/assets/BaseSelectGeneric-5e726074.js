const l="/build/assets/angle-down-blue-6e2ee6e2.svg",n="/build/assets/search-6b866e3f.svg",i={ENTER:13,ESCAPE:27,UP:38,DOWN:40},a={delimiters:["[[","]]"],props:{value:{required:!0},options:{type:Array|Object,required:!0},disabled:{type:Boolean,default:!1},defaultValue:{type:[String,Number],default:""},searchAvailable:{type:Boolean,default:!1}},data:function(){return{angleDownIcon:l,optionIndex:-1,focus:!1,searchIcon:n,filter_template_text:""}},computed:{noOptions:function(){return this.filteredOptions.templates.length},isObject:function(){return!!this.options.templates},filteredOptions:function(){return this.searchAvailable?{templates:this.templates.filter(e=>e.toLowerCase().includes(this.filter_template_text.toLowerCase()))}:{templates:this.templates}},templates:function(){return this.defaultValue?this.isObject?[this.defaultValue,...this.options.templates]:[this.defaultValue,...this.options]:this.isObject?[...this.options.templates]:[...this.options]},values:function(){return this.defaultValue?this.isObject?[null,...this.options.values]:[null,...this.options]:this.isObject?[...this.options.values]:[...this.options]},localValue:function(){if(this.isObject)if(this.value){return{template:this.value.label};//! if is object only render the if the text value is called label
}else{const e=this.values.indexOf(this.value);return{template:this.templates[e]}}else return this.value}},methods:{blur:function(){this.focus=!1},setOption:function(e){const t=this.filteredOptions.templates[e],s=this.templates.indexOf(t);this.$emit("input",this.values[s]),this.blur()},onKeyListener:function(e){const{keyCode:t}=e||window.event;t===i.UP?(this.optionIndex=Math.max(this.optionIndex-1,0),e.preventDefault()):t===i.DOWN?(this.optionIndex=Math.min(this.optionIndex+1,this.filteredOptions.length-1),e.preventDefault()):t===i.ENTER?this.noOptions&&this.setOption(this.optionIndex):t===i.ESCAPE&&this.blur()}},watch:{focus(e){e?(this.optionIndex=-1,document.addEventListener("keydown",this.onKeyListener)):(this.searchAvailable&&(this.filter_template_text=""),document.removeEventListener("keydown",this.onKeyListener))},value(e,t){e!==t&&this.$emit("update-value",e)}},template:`
      <div class="b-select-generic" :class="{ 'disabled': disabled }" v-clickaway="blur">
        <div class="b-select-generic__header" @click="focus = !focus"> 
            <slot name="value" :value="value">
                <template v-if="isObject">
                    <div v-html="localValue.template || defaultValue" :class="{'placeholder':!value}"></div>
                </template>
                <template v-else>
                    <div v-html="localValue || defaultValue" :class="{'placeholder':!value}"></div>
                </template>
            </slot>
            <img class="image" :src="angleDownIcon"/>
        </div>
        <div v-if="focus" class="b-select-generic__body">
            <template v-if="isObject">
                <div v-if="searchAvailable" class="field input-search-with-icon">
                    <p class="control has-icons-left">
                        <input v-model.trim="filter_template_text" autocomplete="off" class="input" type="text"
                        placeholder="Buscar" attr="template_text" >
                        <span class="icon is-small is-left"> <img  :src="searchIcon"/></i> </span>
                    </p>
                </div>
                <div class="b-select-generic__list">
                    <div 
                        class="b-select-generic__item" 
                        :class="{ 'b-select-generic__item--hover': index === optionIndex }" 
                        v-for="(option, index) in filteredOptions.templates" 
                        @click="setOption(index)"
                    >
                        <slot name="option" :option="option"> 
                            <div v-html="option"></div> 
                        </slot>
                    </div>
                    <div class="b-select-generic__item" v-if="!noOptions">No hay opciones</div>
                </div>
            </template>
            <template v-else>
                <div v-if="searchAvailable" class="field input-search-with-icon">
                    <p class="control has-icons-left">
                        <input v-model.trim="filter_template_text" autocomplete="off" class="input" type="text"
                        placeholder="Buscar" attr="template_text" >
                        <span class="icon is-small is-left"> <img  :src="searchIcon"/></i> </span>
                    </p>
                </div>
                <div class="b-select-generic__list">
                    <div 
                        class="b-select-generic__item" 
                        :class="{ 'b-select-generic__item--hover': index === optionIndex }" 
                        v-for="(option, index) in filteredOptions.templates" 
                        @click="setOption(index)"
                    >
                        <slot name="option" :option="option"> 
                            <div v-html="option"></div> 
                        </slot>
                    </div>
                    <div class="b-select-generic__item" v-if="!noOptions">No hay opciones</div>
                </div>
            </template>
        </div>
      </div>
    `};export{a as B};

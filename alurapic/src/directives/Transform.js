import Vue from 'vue';
Vue.directive('meu-transform', {

    bind(el, binding, vnode) {

        /*console.log('Directiva ativada');*/
        let current = 0;
        el.addEventListener('dblclick', function() {
            
            current+=90;
            this.style.transform = `rotate(${current}deg)`;
        });

    }
});
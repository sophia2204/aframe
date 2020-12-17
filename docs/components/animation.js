AFRAME.registerComponent('circle',{
    init:function(){
        const el = this.el;
        this.el.addEventListener('click', () => {
            el.setAttribute('animation__3', "property: rotation; to: 0 360 0; loop: 5; dur: 1000; delay: 500");
            circle.play();
            setTimeout(function () {
                jump.parentNode.removeChild(jump);
            },1500);
        });
    }
  });
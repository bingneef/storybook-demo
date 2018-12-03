const template = `
  <a-scene vr-mode-ui="enabled: true">
    <a-assets>
      <video id="360-vr" autoplay loop="true" src="/assets/videos/360-vr.mp4"> </video>
    </a-assets>

    <a-videosphere autoplay src="#360-vr"></a-videosphere>
    <a-entity camera look-controls>
      <a-cursor></a-cursor>
    </a-entity>

    <a-circle 
      cursor-listener
      color="#CCC" 
      radius="0.05"
      position="0 0.15 -1">
      <a-animation attribute="radius" easing="ease-in-out" dur="400" begin="animateFocus" from="0.05" to="0.1"></a-animation>
      <a-animation attribute="radius" easing="ease-in-out" dur="400" begin="animateOutOfFocus" from="0.1" to="0.05"></a-animation>
    </a-circle>

    <a-entity 
      id="circle-description"
      text="value: Hello World; color: red;"
      visible="false"
      position="0 0.15 -1">
    </a-entity>
  </a-scene>
  
  <script>
    var sceneEl = document.querySelector('a-scene');
    AFRAME.registerComponent('cursor-listener', {
    init: function () {
      this.el.addEventListener('mouseenter', function (evt) {
        this.emit('animateFocus');
      });

      this.el.addEventListener('mouseleave', function (evt) {
        this.emit('animateOutOfFocus');
        sceneEl.querySelector('#circle-description').setAttribute('visible', false);
      });
      
      this.el.addEventListener('click', function (evt) {
        var descriptionEl = sceneEl.querySelector('#circle-description');
        descriptionEl.setAttribute('visible', !descriptionEl.getAttribute('visible'));
      });
    }
  });
</script>
`;

export default template;
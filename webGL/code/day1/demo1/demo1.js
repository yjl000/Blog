var canvas = document.getElementById("canvas");

var gl = canvas.getContext("experimental-webgl");

var program = createProgramFromScripts(gl, ["2d-vertex-shader", "2d-fragment-shader"]);
gl.useProgram(program);

var positionLocation = gl.getAttribLocation(program, 'a_position');
console.log('positionLocation: ', positionLocation)
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array([
    -1.0, -1.0,
    1.0, -1.0,
    -1.0, 1.0,
    -1.0, 1.0,
    1.0, -1.0,
    1.0, 1.0
  ]),
  gl.STATIC_DRAW
);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, 6);


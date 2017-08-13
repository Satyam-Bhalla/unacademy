<!DOCTYPE html>
<html>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)" onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me or click me</div>

<script>
function mOver(obj) {
    obj.innerHTML = "Thank You";
    obj.style.backgroundColor = "#1ec5e5";
}

function mOut(obj) {
obj.style.backgroundColor="#D94A38";
    obj.innerHTML = "Mouse Over Me or click me";
}
function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
}
</script>

</body>
</html> 

function Dich()
{
  var i = 0;
  var xdich=document.getElementById('En').value;
  var arryEnli=["hello","good","bad"];
  var arryViet=["XinChao","Tot","bad"];
  var last=arryEnli.legth;
  for ( i=0; i<arryEnli.length; i++){
      if (xdich == arryEnli[i]) {
        document.getElementById('Vi').value=arryViet[i];
        break;


      } else document.getElementById('Vi').value ="Lỗi";
  }
}

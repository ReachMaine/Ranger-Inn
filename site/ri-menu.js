//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#934---------------
//F:\Internet\_Websites\RangerInn\site\ri-menu.awm
var awmMenuName='ri-menu';
var awmLibraryBuild=934;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata/ri-menu';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?2:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var mpin=mpi;
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+(awmMenuPath+awmLibraryPath).replace(/\/$/,"")+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='QOUDKVOTFCVQMWXCWIJOIB';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["logo.png",586,185];
awmCreateCSS(0,1,0,n,'#BE0000',n,n,n,'solid','0','#FFFFFF','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#FFFFFF','#BE0000',n,'bold 14px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#BE0000',n,'bold 14px Tahoma, Arial, Helvetica, sans-serif',n,'solid','3','#FFFFFF','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#BE0000',n,'bold 14px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCF(0,0,0,-125,30);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,5,0,0,0,1,0,25,0,1,n,n,100,0,0,0,0,100,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,1,n,n,'',n,0,[],0,"");
it=s0.addItemWithImages(1,2,3,"    <span style=\"font-variant: small-caps\">Attractions</span>   ",n,n,"",n,n,n,3,3,3,n,n,n,"attractions.html",n,n,n,"attractions.html",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,0,0,0,0,0,0,11,n);
it=s0.addItem(1,2,3,"    <span style=\"font-variant: small-caps\">Our Rooms</span>   ",n,n,"","rooms.html",n,n,n,"rooms.html",n,0,0,2,0,0,12,n);
it=s0.addItem(1,2,3,"    <span style=\"font-variant: small-caps\">Rates</span>   ",n,n,"","rates.html",n,n,n,"rates.html",n,0,0,2,0,0,10,n);
it=s0.addItem(1,2,3,"    <span style=\"font-variant: small-caps\">Reservations</span>   ",n,n,"","contact.html",n,n,n,"contact.html",n,0,0,2,0,0,9,n);
it=s0.addItem(1,2,3,"    <span style=\"font-variant: small-caps\">Find Us</span>   ",n,n,"","map.html",n,n,n,"map.html",n,0,0,2,0,0,8,n);
it=s0.addItem(1,2,3,"    <span style=\"font-variant: small-caps\">Email</span>   ",n,n,"","email.html",n,n,n,"email.html",n,0,0,2,0,0,1,n);
it=s0.addItem(1,2,3,"    <span style=\"font-variant: small-caps\">home</span>   ",n,n,"","index.html",n,n,n,"index.html",n,0,0,2,0,0,7,n);
s0.pm.buildMenu();
}}